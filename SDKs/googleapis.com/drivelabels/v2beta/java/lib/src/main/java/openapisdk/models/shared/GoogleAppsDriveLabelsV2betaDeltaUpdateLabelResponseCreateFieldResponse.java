package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse
 * Response following Field create.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Integer priority;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse withPriority(Integer priority) {
        this.priority = priority;
        return this;
    }
}