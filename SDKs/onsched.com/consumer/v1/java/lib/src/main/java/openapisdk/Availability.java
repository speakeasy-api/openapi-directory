package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Availability {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Availability(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDate - Returns a list of available times.
     *
     * Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
     * then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
     * for a specific resource by specifying the optional resourceId parameter.<br /><br />
     * 
     * Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm. 
     * You will only see availability within the boundary of your business start and end times.<br /><br />
     * 
     * 
     * dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
     * 
     * 
     * firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
     * by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
     * Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
     * 
     * You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
     * 
     * 
     * The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you 
     * use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
     * 
     * Availabity can be complex. We provided an endpoint help you troubleshoot:
     * /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable. 
     * This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
     * 
     * 
     * See more information at <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a>
    **/
    public openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse getConsumerV1AvailabilityServiceIdStartDateEndDate(openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse res = new openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse() {{
            availabilityViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AvailabilityViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AvailabilityViewModel.class);
                res.availabilityViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateDays - Returns a list of available days.
     *
     * This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
     * 
     * Day level availability is a good way to restrict your choices of dates in your app and improve usability.
    **/
    public openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse getConsumerV1AvailabilityServiceIdStartDateEndDateDays(openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse res = new openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse() {{
            availabilityDayViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AvailabilityDayViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AvailabilityDayViewModel.class);
                res.availabilityDayViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateTimes - Returns a list of available times.
     *
     * <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.        
     *             Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    public openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse getConsumerV1AvailabilityServiceIdStartDateEndDateTimes(openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse res = new openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse() {{
            availability3ViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Availability3ViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Availability3ViewModel.class);
                res.availability3ViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable - Returns a list of unavailable times.
     *
     * This endpoint is used to show unavailable times and provides information why the time is unavailable.
    **/
    public openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable(openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse res = new openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse() {{
            unavailableTimeListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.unavailableTimeListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateWindows - Returns a list of available booking window times.
     *
     * This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
     * Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    public openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse getConsumerV1AvailabilityServiceIdStartDateEndDateWindows(openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse res = new openapisdk.models.operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse() {{
            windowAvailabilityViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WindowAvailabilityViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WindowAvailabilityViewModel.class);
                res.windowAvailabilityViewModel = out;
            }
        }

        return res;
    }
	
}