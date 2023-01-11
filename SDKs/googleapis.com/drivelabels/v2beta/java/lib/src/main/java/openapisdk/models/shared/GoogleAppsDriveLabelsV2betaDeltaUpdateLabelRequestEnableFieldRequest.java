package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest
 * Request to enable the Field.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest withId(String id) {
        this.id = id;
        return this;
    }
}