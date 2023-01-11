package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoSuggestionsTagSuggestion
 * A single tag suggestion with it's relevance information.
**/
public class VideoSuggestionsTagSuggestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryRestricts")
    public String[] categoryRestricts;
    public VideoSuggestionsTagSuggestion withCategoryRestricts(String[] categoryRestricts) {
        this.categoryRestricts = categoryRestricts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public VideoSuggestionsTagSuggestion withTag(String tag) {
        this.tag = tag;
        return this;
    }
}