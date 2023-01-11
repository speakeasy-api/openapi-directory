package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaListServicesResponse
 * Response message for the ListServices method.
**/
public class GoogleFirebaseAppcheckV1betaListServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFirebaseAppcheckV1betaListServicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public GoogleFirebaseAppcheckV1betaService[] services;
    public GoogleFirebaseAppcheckV1betaListServicesResponse withServices(GoogleFirebaseAppcheckV1betaService[] services) {
        this.services = services;
        return this;
    }
}