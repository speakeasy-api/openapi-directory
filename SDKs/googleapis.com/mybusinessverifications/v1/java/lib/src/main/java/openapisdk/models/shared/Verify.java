package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Verify
 * Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
**/
public class Verify {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPendingVerification")
    public Boolean hasPendingVerification;
    public Verify withHasPendingVerification(Boolean hasPendingVerification) {
        this.hasPendingVerification = hasPendingVerification;
        return this;
    }
}