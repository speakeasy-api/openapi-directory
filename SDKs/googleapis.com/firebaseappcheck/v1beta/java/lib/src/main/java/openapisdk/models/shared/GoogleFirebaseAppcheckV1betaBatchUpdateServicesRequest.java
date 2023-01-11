package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest
 * Request message for the BatchUpdateServices method.
**/
public class GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleFirebaseAppcheckV1betaUpdateServiceRequest[] requests;
    public GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest withRequests(GoogleFirebaseAppcheckV1betaUpdateServiceRequest[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}