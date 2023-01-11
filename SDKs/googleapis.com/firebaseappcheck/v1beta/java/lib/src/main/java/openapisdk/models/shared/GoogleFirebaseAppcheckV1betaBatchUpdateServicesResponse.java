package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse
 * Response message for the BatchUpdateServices method.
**/
public class GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public GoogleFirebaseAppcheckV1betaService[] services;
    public GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse withServices(GoogleFirebaseAppcheckV1betaService[] services) {
        this.services = services;
        return this;
    }
}