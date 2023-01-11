package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest
 * Request to delete the Field.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest withId(String id) {
        this.id = id;
        return this;
    }
}