package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiDeployment
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
public class ApiDeployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessGuidance")
    public String accessGuidance;
    public ApiDeployment withAccessGuidance(String accessGuidance) {
        this.accessGuidance = accessGuidance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public ApiDeployment withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiSpecRevision")
    public String apiSpecRevision;
    public ApiDeployment withApiSpecRevision(String apiSpecRevision) {
        this.apiSpecRevision = apiSpecRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ApiDeployment withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiDeployment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ApiDeployment withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUri")
    public String endpointUri;
    public ApiDeployment withEndpointUri(String endpointUri) {
        this.endpointUri = endpointUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalChannelUri")
    public String externalChannelUri;
    public ApiDeployment withExternalChannelUri(String externalChannelUri) {
        this.externalChannelUri = externalChannelUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intendedAudience")
    public String intendedAudience;
    public ApiDeployment withIntendedAudience(String intendedAudience) {
        this.intendedAudience = intendedAudience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApiDeployment withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApiDeployment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreateTime")
    public String revisionCreateTime;
    public ApiDeployment withRevisionCreateTime(String revisionCreateTime) {
        this.revisionCreateTime = revisionCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public ApiDeployment withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionUpdateTime")
    public String revisionUpdateTime;
    public ApiDeployment withRevisionUpdateTime(String revisionUpdateTime) {
        this.revisionUpdateTime = revisionUpdateTime;
        return this;
    }
}