package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CombineOrganizationNetworksRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentString")
    public String enrollmentString;
    public CombineOrganizationNetworksRequestBody withEnrollmentString(String enrollmentString) {
        this.enrollmentString = enrollmentString;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CombineOrganizationNetworksRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("networkIds")
    public String[] networkIds;
    public CombineOrganizationNetworksRequestBody withNetworkIds(String[] networkIds) {
        this.networkIds = networkIds;
        return this;
    }
}