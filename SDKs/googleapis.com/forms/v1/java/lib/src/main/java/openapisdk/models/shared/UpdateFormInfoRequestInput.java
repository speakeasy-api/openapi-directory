package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFormInfoRequestInput
 * Update Form's Info.
**/
public class UpdateFormInfoRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public InfoInput info;
    public UpdateFormInfoRequestInput withInfo(InfoInput info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public UpdateFormInfoRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}