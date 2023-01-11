package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Jobs {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Jobs(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteJobById - Delete Job by Id
     *
     * Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).
    **/
    public openapisdk.models.operations.DeleteJobByIdResponse deleteJobById(openapisdk.models.operations.DeleteJobByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/jobs/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteJobByIdResponse res = new openapisdk.models.operations.DeleteJobByIdResponse() {{
            deleteJobById401ApplicationProblemPlusJsonAny = null;
            deleteJobById404ApplicationProblemPlusJsonObject = null;
            deleteJobById409ApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteJobById401ApplicationProblemPlusJsonAny = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteJobById404ApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteJobById404ApplicationProblemPlusJson.class);
                res.deleteJobById404ApplicationProblemPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteJobById409ApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteJobById409ApplicationProblemPlusJson.class);
                res.deleteJobById409ApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getJobById - Get Job By Id
     *
     * Returns information about a transcription job
    **/
    public openapisdk.models.operations.GetJobByIdResponse getJobById(openapisdk.models.operations.GetJobByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/jobs/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetJobByIdResponse res = new openapisdk.models.operations.GetJobByIdResponse() {{
            job = null;
            getJobById401ApplicationProblemPlusJsonAny = null;
            getJobById404ApplicationProblemPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Job out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Job.class);
                res.job = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getJobById401ApplicationProblemPlusJsonAny = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetJobById404ApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetJobById404ApplicationProblemPlusJson.class);
                res.getJobById404ApplicationProblemPlusJsonObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListOfJobs - Get List of Jobs
     *
     * Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.
    **/
    public openapisdk.models.operations.GetListOfJobsResponse getListOfJobs(openapisdk.models.operations.GetListOfJobsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/jobs");
        
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

        openapisdk.models.operations.GetListOfJobsResponse res = new openapisdk.models.operations.GetListOfJobsResponse() {{
            jobs = null;
            getListOfJobs400ApplicationProblemPlusJsonObject = null;
            getListOfJobs401ApplicationProblemPlusJsonAny = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Job[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Job[].class);
                res.jobs = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListOfJobs400ApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListOfJobs400ApplicationProblemPlusJson.class);
                res.getListOfJobs400ApplicationProblemPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getListOfJobs401ApplicationProblemPlusJsonAny = out;
            }
        }

        return res;
    }
	
	
    /**
     * submitTranscriptionJob - Submit Transcription Job
     *
     * Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.
    **/
    public openapisdk.models.operations.SubmitTranscriptionJobResponse submitTranscriptionJob(openapisdk.models.operations.SubmitTranscriptionJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/jobs");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SubmitTranscriptionJobResponse res = new openapisdk.models.operations.SubmitTranscriptionJobResponse() {{
            job = null;
            submitTranscriptionJob400ApplicationProblemPlusJsonObject = null;
            submitTranscriptionJob401ApplicationProblemPlusJsonAny = null;
            submitTranscriptionJob413ApplicationProblemPlusJsonAny = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Job out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Job.class);
                res.job = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SubmitTranscriptionJob400ApplicationProblemPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SubmitTranscriptionJob400ApplicationProblemPlusJson.class);
                res.submitTranscriptionJob400ApplicationProblemPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.submitTranscriptionJob401ApplicationProblemPlusJsonAny = out;
            }
        }
        else if (httpRes.statusCode() == 413) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/problem+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.submitTranscriptionJob413ApplicationProblemPlusJsonAny = out;
            }
        }

        return res;
    }
	
}