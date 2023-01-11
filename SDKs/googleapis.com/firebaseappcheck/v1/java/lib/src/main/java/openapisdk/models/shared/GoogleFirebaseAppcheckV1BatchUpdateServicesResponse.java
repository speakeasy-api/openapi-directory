package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchUpdateServicesResponse
 * Response message for the BatchUpdateServices method.
**/
public class GoogleFirebaseAppcheckV1BatchUpdateServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public GoogleFirebaseAppcheckV1Service[] services;
    public GoogleFirebaseAppcheckV1BatchUpdateServicesResponse withServices(GoogleFirebaseAppcheckV1Service[] services) {
        this.services = services;
        return this;
    }
}