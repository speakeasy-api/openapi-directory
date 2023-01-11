package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse
 * Response for Label update.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse[] responses;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse withResponses(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse[] responses) {
        this.responses = responses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedLabel")
    public GoogleAppsDriveLabelsV2betaLabel updatedLabel;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse withUpdatedLabel(GoogleAppsDriveLabelsV2betaLabel updatedLabel) {
        this.updatedLabel = updatedLabel;
        return this;
    }
}