package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ServerlessV1ServiceBuild {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ServerlessV1ServiceBuild withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_versions")
    public Object[] assetVersions;
    public ServerlessV1ServiceBuild withAssetVersions(Object[] assetVersions) {
        this.assetVersions = assetVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ServerlessV1ServiceBuild withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ServerlessV1ServiceBuild withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependencies")
    public Object[] dependencies;
    public ServerlessV1ServiceBuild withDependencies(Object[] dependencies) {
        this.dependencies = dependencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("function_versions")
    public Object[] functionVersions;
    public ServerlessV1ServiceBuild withFunctionVersions(Object[] functionVersions) {
        this.functionVersions = functionVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ServerlessV1ServiceBuild withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtime")
    public BuildEnumRuntimeEnum runtime;
    public ServerlessV1ServiceBuild withRuntime(BuildEnumRuntimeEnum runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ServerlessV1ServiceBuild withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ServerlessV1ServiceBuild withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public BuildEnumStatusEnum status;
    public ServerlessV1ServiceBuild withStatus(BuildEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ServerlessV1ServiceBuild withUrl(String url) {
        this.url = url;
        return this;
    }
}