package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MoveOrganizationLicensesSeatsRequestBody {
    @JsonProperty("destOrganizationId")
    public String destOrganizationId;
    public MoveOrganizationLicensesSeatsRequestBody withDestOrganizationId(String destOrganizationId) {
        this.destOrganizationId = destOrganizationId;
        return this;
    }
    @JsonProperty("licenseId")
    public String licenseId;
    public MoveOrganizationLicensesSeatsRequestBody withLicenseId(String licenseId) {
        this.licenseId = licenseId;
        return this;
    }
    @JsonProperty("seatCount")
    public Long seatCount;
    public MoveOrganizationLicensesSeatsRequestBody withSeatCount(Long seatCount) {
        this.seatCount = seatCount;
        return this;
    }
}