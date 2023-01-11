package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VeteranStatusConfirmation
 * Veteran status confirmation for an individual
**/
public class VeteranStatusConfirmation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("veteran_status")
    public VeteranStatusConfirmationVeteranStatusEnum veteranStatus;
    public VeteranStatusConfirmation withVeteranStatus(VeteranStatusConfirmationVeteranStatusEnum veteranStatus) {
        this.veteranStatus = veteranStatus;
        return this;
    }
}