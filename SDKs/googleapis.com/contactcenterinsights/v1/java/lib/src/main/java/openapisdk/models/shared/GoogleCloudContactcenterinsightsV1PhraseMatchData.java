package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1PhraseMatchData
 * The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
**/
public class GoogleCloudContactcenterinsightsV1PhraseMatchData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1PhraseMatchData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatcher")
    public String phraseMatcher;
    public GoogleCloudContactcenterinsightsV1PhraseMatchData withPhraseMatcher(String phraseMatcher) {
        this.phraseMatcher = phraseMatcher;
        return this;
    }
}