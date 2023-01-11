package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindDevicesByOwnerRequest
 * Request to find devices by customers.
**/
public class FindDevicesByOwnerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String[] customerId;
    public FindDevicesByOwnerRequest withCustomerId(String[] customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleWorkspaceCustomerId")
    public String[] googleWorkspaceCustomerId;
    public FindDevicesByOwnerRequest withGoogleWorkspaceCustomerId(String[] googleWorkspaceCustomerId) {
        this.googleWorkspaceCustomerId = googleWorkspaceCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public String limit;
    public FindDevicesByOwnerRequest withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public FindDevicesByOwnerRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionType")
    public FindDevicesByOwnerRequestSectionTypeEnum sectionType;
    public FindDevicesByOwnerRequest withSectionType(FindDevicesByOwnerRequestSectionTypeEnum sectionType) {
        this.sectionType = sectionType;
        return this;
    }
}