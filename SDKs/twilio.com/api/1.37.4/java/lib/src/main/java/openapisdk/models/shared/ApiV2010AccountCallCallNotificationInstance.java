package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountCallCallNotificationInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountCallCallNotificationInstance withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountCallCallNotificationInstance withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public ApiV2010AccountCallCallNotificationInstance withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountCallCallNotificationInstance withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountCallCallNotificationInstance withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public String errorCode;
    public ApiV2010AccountCallCallNotificationInstance withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log")
    public String log;
    public ApiV2010AccountCallCallNotificationInstance withLog(String log) {
        this.log = log;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_date")
    public String messageDate;
    public ApiV2010AccountCallCallNotificationInstance withMessageDate(String messageDate) {
        this.messageDate = messageDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_text")
    public String messageText;
    public ApiV2010AccountCallCallNotificationInstance withMessageText(String messageText) {
        this.messageText = messageText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("more_info")
    public String moreInfo;
    public ApiV2010AccountCallCallNotificationInstance withMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_method")
    public ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum requestMethod;
    public ApiV2010AccountCallCallNotificationInstance withRequestMethod(ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_url")
    public String requestUrl;
    public ApiV2010AccountCallCallNotificationInstance withRequestUrl(String requestUrl) {
        this.requestUrl = requestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_variables")
    public String requestVariables;
    public ApiV2010AccountCallCallNotificationInstance withRequestVariables(String requestVariables) {
        this.requestVariables = requestVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_body")
    public String responseBody;
    public ApiV2010AccountCallCallNotificationInstance withResponseBody(String responseBody) {
        this.responseBody = responseBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_headers")
    public String responseHeaders;
    public ApiV2010AccountCallCallNotificationInstance withResponseHeaders(String responseHeaders) {
        this.responseHeaders = responseHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountCallCallNotificationInstance withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountCallCallNotificationInstance withUri(String uri) {
        this.uri = uri;
        return this;
    }
}