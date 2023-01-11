package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestionClusterProto
 * A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
**/
public class SuggestionClusterProto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SuggestionClusterProtoCategoryEnum category;
    public SuggestionClusterProto withCategory(SuggestionClusterProtoCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestions")
    public SuggestionProto[] suggestions;
    public SuggestionClusterProto withSuggestions(SuggestionProto[] suggestions) {
        this.suggestions = suggestions;
        return this;
    }
}