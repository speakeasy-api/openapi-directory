package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MtlsPolicy
 * Specification of the MTLSPolicy.
**/
public class MtlsPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientValidationCa")
    public ValidationCa[] clientValidationCa;
    public MtlsPolicy withClientValidationCa(ValidationCa[] clientValidationCa) {
        this.clientValidationCa = clientValidationCa;
        return this;
    }
}