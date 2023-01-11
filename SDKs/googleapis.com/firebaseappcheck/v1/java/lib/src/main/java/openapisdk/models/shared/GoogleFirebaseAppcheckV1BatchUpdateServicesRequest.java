package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchUpdateServicesRequest
 * Request message for the BatchUpdateServices method.
**/
public class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleFirebaseAppcheckV1UpdateServiceRequest[] requests;
    public GoogleFirebaseAppcheckV1BatchUpdateServicesRequest withRequests(GoogleFirebaseAppcheckV1UpdateServiceRequest[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleFirebaseAppcheckV1BatchUpdateServicesRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}