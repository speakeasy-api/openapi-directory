package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MoveOrganizationLicensesRequestBody {
    @JsonProperty("destOrganizationId")
    public String destOrganizationId;
    public MoveOrganizationLicensesRequestBody withDestOrganizationId(String destOrganizationId) {
        this.destOrganizationId = destOrganizationId;
        return this;
    }
    @JsonProperty("licenseIds")
    public String[] licenseIds;
    public MoveOrganizationLicensesRequestBody withLicenseIds(String[] licenseIds) {
        this.licenseIds = licenseIds;
        return this;
    }
}