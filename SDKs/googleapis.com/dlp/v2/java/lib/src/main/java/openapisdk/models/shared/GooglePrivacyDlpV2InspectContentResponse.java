package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectContentResponse
 * Results of inspecting an item.
**/
public class GooglePrivacyDlpV2InspectContentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public GooglePrivacyDlpV2InspectResult result;
    public GooglePrivacyDlpV2InspectContentResponse withResult(GooglePrivacyDlpV2InspectResult result) {
        this.result = result;
        return this;
    }
}