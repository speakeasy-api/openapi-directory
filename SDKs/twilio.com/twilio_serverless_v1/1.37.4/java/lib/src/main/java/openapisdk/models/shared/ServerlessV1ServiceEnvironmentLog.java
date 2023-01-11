package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ServerlessV1ServiceEnvironmentLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ServerlessV1ServiceEnvironmentLog withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_sid")
    public String buildSid;
    public ServerlessV1ServiceEnvironmentLog withBuildSid(String buildSid) {
        this.buildSid = buildSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ServerlessV1ServiceEnvironmentLog withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment_sid")
    public String deploymentSid;
    public ServerlessV1ServiceEnvironmentLog withDeploymentSid(String deploymentSid) {
        this.deploymentSid = deploymentSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_sid")
    public String environmentSid;
    public ServerlessV1ServiceEnvironmentLog withEnvironmentSid(String environmentSid) {
        this.environmentSid = environmentSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("function_sid")
    public String functionSid;
    public ServerlessV1ServiceEnvironmentLog withFunctionSid(String functionSid) {
        this.functionSid = functionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public LogEnumLevelEnum level;
    public ServerlessV1ServiceEnvironmentLog withLevel(LogEnumLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ServerlessV1ServiceEnvironmentLog withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_sid")
    public String requestSid;
    public ServerlessV1ServiceEnvironmentLog withRequestSid(String requestSid) {
        this.requestSid = requestSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ServerlessV1ServiceEnvironmentLog withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ServerlessV1ServiceEnvironmentLog withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ServerlessV1ServiceEnvironmentLog withUrl(String url) {
        this.url = url;
        return this;
    }
}