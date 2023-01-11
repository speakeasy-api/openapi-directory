package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1ListStructuresResponse
 * Response message for SmartDeviceManagementService.ListStructures
**/
public class GoogleHomeEnterpriseSdmV1ListStructuresResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleHomeEnterpriseSdmV1ListStructuresResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structures")
    public GoogleHomeEnterpriseSdmV1Structure[] structures;
    public GoogleHomeEnterpriseSdmV1ListStructuresResponse withStructures(GoogleHomeEnterpriseSdmV1Structure[] structures) {
        this.structures = structures;
        return this;
    }
}