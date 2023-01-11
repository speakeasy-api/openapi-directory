package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteLicenseeResponseSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public DeleteLicenseeResult result;
    public DeleteLicenseeResponseSchema withResult(DeleteLicenseeResult result) {
        this.result = result;
        return this;
    }
}