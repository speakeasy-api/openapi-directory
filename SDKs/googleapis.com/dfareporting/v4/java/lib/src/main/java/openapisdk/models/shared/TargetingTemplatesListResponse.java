package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingTemplatesListResponse
 * Targeting Template List Response
**/
public class TargetingTemplatesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TargetingTemplatesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public TargetingTemplatesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingTemplates")
    public TargetingTemplate[] targetingTemplates;
    public TargetingTemplatesListResponse withTargetingTemplates(TargetingTemplate[] targetingTemplates) {
        this.targetingTemplates = targetingTemplates;
        return this;
    }
}