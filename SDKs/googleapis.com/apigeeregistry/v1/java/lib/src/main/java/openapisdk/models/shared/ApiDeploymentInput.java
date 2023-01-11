package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiDeploymentInput
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
public class ApiDeploymentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessGuidance")
    public String accessGuidance;
    public ApiDeploymentInput withAccessGuidance(String accessGuidance) {
        this.accessGuidance = accessGuidance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public ApiDeploymentInput withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiSpecRevision")
    public String apiSpecRevision;
    public ApiDeploymentInput withApiSpecRevision(String apiSpecRevision) {
        this.apiSpecRevision = apiSpecRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiDeploymentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ApiDeploymentInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUri")
    public String endpointUri;
    public ApiDeploymentInput withEndpointUri(String endpointUri) {
        this.endpointUri = endpointUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalChannelUri")
    public String externalChannelUri;
    public ApiDeploymentInput withExternalChannelUri(String externalChannelUri) {
        this.externalChannelUri = externalChannelUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intendedAudience")
    public String intendedAudience;
    public ApiDeploymentInput withIntendedAudience(String intendedAudience) {
        this.intendedAudience = intendedAudience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApiDeploymentInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApiDeploymentInput withName(String name) {
        this.name = name;
        return this;
    }
}