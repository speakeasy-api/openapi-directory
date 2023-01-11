package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ListServicesResponse
 * Response message containing a list of Services.
**/
public class GoogleCloudRunV2ListServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRunV2ListServicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public GoogleCloudRunV2Service[] services;
    public GoogleCloudRunV2ListServicesResponse withServices(GoogleCloudRunV2Service[] services) {
        this.services = services;
        return this;
    }
}