package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaUpdateServiceRequest
 * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
**/
public class GoogleFirebaseAppcheckV1betaUpdateServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public GoogleFirebaseAppcheckV1betaService service;
    public GoogleFirebaseAppcheckV1betaUpdateServiceRequest withService(GoogleFirebaseAppcheckV1betaService service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleFirebaseAppcheckV1betaUpdateServiceRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}