package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightActivitiesGenerateTagResponse
 * Floodlight Activity GenerateTag Response
**/
public class FloodlightActivitiesGenerateTagResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityTag")
    public String floodlightActivityTag;
    public FloodlightActivitiesGenerateTagResponse withFloodlightActivityTag(String floodlightActivityTag) {
        this.floodlightActivityTag = floodlightActivityTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalSiteTagGlobalSnippet")
    public String globalSiteTagGlobalSnippet;
    public FloodlightActivitiesGenerateTagResponse withGlobalSiteTagGlobalSnippet(String globalSiteTagGlobalSnippet) {
        this.globalSiteTagGlobalSnippet = globalSiteTagGlobalSnippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightActivitiesGenerateTagResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}