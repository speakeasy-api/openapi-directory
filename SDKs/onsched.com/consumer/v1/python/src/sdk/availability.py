import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Availability:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_consumer_v1_availability_service_id_start_date_end_date_(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse:
        r"""Returns a list of available times.
        Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
        then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
        for a specific resource by specifying the optional resourceId parameter.<br /><br />
        
        Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm. 
        You will only see availability within the boundary of your business start and end times.<br /><br />
        
        
        dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
        
        
        firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
        by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
        Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
        
        You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
        
        
        The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you 
        use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
        
        Availabity can be complex. We provided an endpoint help you troubleshoot:
        /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable. 
        This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
        
        
        See more information at <a href=\"https://onsched.readme.io/docs/availability-overview\">Availability Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AvailabilityViewModel])
                res.availability_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_days(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse:
        r"""Returns a list of available days.
        This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
        
        Day level availability is a good way to restrict your choices of dates in your app and improve usability.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AvailabilityDayViewModel])
                res.availability_day_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_times(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse:
        r"""Returns a list of available times.
        <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.        
                    Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Availability3ViewModel])
                res.availability3_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_unavailable(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse:
        r"""Returns a list of unavailable times.
        This endpoint is used to show unavailable times and provides information why the time is unavailable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unavailable_time_list_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_windows(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse:
        r"""Returns a list of available booking window times.
        This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
        Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WindowAvailabilityViewModel])
                res.window_availability_view_model = out

        return res

    