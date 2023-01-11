package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IntentMatchData
 * The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.
**/
public class GoogleCloudContactcenterinsightsV1IntentMatchData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentUniqueId")
    public String intentUniqueId;
    public GoogleCloudContactcenterinsightsV1IntentMatchData withIntentUniqueId(String intentUniqueId) {
        this.intentUniqueId = intentUniqueId;
        return this;
    }
}