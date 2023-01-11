package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RenewOrganizationLicensesSeatsRequestBody {
    @JsonProperty("licenseIdToRenew")
    public String licenseIdToRenew;
    public RenewOrganizationLicensesSeatsRequestBody withLicenseIdToRenew(String licenseIdToRenew) {
        this.licenseIdToRenew = licenseIdToRenew;
        return this;
    }
    @JsonProperty("unusedLicenseId")
    public String unusedLicenseId;
    public RenewOrganizationLicensesSeatsRequestBody withUnusedLicenseId(String unusedLicenseId) {
        this.unusedLicenseId = unusedLicenseId;
        return this;
    }
}