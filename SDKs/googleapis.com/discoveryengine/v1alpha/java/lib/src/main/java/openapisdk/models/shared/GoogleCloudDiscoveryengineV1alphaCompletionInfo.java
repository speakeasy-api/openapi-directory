package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaCompletionInfo
 * Detailed completion information including completion attribution token and clicked completion info.
**/
public class GoogleCloudDiscoveryengineV1alphaCompletionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedPosition")
    public Integer selectedPosition;
    public GoogleCloudDiscoveryengineV1alphaCompletionInfo withSelectedPosition(Integer selectedPosition) {
        this.selectedPosition = selectedPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedSuggestion")
    public String selectedSuggestion;
    public GoogleCloudDiscoveryengineV1alphaCompletionInfo withSelectedSuggestion(String selectedSuggestion) {
        this.selectedSuggestion = selectedSuggestion;
        return this;
    }
}