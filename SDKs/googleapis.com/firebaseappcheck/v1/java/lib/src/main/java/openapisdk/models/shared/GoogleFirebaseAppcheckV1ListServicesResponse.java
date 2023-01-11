package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ListServicesResponse
 * Response message for the ListServices method.
**/
public class GoogleFirebaseAppcheckV1ListServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFirebaseAppcheckV1ListServicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public GoogleFirebaseAppcheckV1Service[] services;
    public GoogleFirebaseAppcheckV1ListServicesResponse withServices(GoogleFirebaseAppcheckV1Service[] services) {
        this.services = services;
        return this;
    }
}