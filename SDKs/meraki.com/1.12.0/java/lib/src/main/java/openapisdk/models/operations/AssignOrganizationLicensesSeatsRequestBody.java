package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssignOrganizationLicensesSeatsRequestBody {
    @JsonProperty("licenseId")
    public String licenseId;
    public AssignOrganizationLicensesSeatsRequestBody withLicenseId(String licenseId) {
        this.licenseId = licenseId;
        return this;
    }
    @JsonProperty("networkId")
    public String networkId;
    public AssignOrganizationLicensesSeatsRequestBody withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @JsonProperty("seatCount")
    public Long seatCount;
    public AssignOrganizationLicensesSeatsRequestBody withSeatCount(Long seatCount) {
        this.seatCount = seatCount;
        return this;
    }
}