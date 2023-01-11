package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MonitorV1AlertInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MonitorV1AlertInstance withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alert_text")
    public String alertText;
    public MonitorV1AlertInstance withAlertText(String alertText) {
        this.alertText = alertText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public MonitorV1AlertInstance withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MonitorV1AlertInstance withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_generated")
    public OffsetDateTime dateGenerated;
    public MonitorV1AlertInstance withDateGenerated(OffsetDateTime dateGenerated) {
        this.dateGenerated = dateGenerated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MonitorV1AlertInstance withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public String errorCode;
    public MonitorV1AlertInstance withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log_level")
    public String logLevel;
    public MonitorV1AlertInstance withLogLevel(String logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("more_info")
    public String moreInfo;
    public MonitorV1AlertInstance withMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_headers")
    public String requestHeaders;
    public MonitorV1AlertInstance withRequestHeaders(String requestHeaders) {
        this.requestHeaders = requestHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_method")
    public MonitorV1AlertInstanceRequestMethodEnum requestMethod;
    public MonitorV1AlertInstance withRequestMethod(MonitorV1AlertInstanceRequestMethodEnum requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_url")
    public String requestUrl;
    public MonitorV1AlertInstance withRequestUrl(String requestUrl) {
        this.requestUrl = requestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_variables")
    public String requestVariables;
    public MonitorV1AlertInstance withRequestVariables(String requestVariables) {
        this.requestVariables = requestVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_sid")
    public String resourceSid;
    public MonitorV1AlertInstance withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_body")
    public String responseBody;
    public MonitorV1AlertInstance withResponseBody(String responseBody) {
        this.responseBody = responseBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_headers")
    public String responseHeaders;
    public MonitorV1AlertInstance withResponseHeaders(String responseHeaders) {
        this.responseHeaders = responseHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public MonitorV1AlertInstance withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MonitorV1AlertInstance withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MonitorV1AlertInstance withUrl(String url) {
        this.url = url;
        return this;
    }
}