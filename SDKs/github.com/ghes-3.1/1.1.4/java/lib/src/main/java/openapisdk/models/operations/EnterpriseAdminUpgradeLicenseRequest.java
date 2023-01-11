package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpgradeLicenseRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpgradeLicenseRequestBody request;
    public EnterpriseAdminUpgradeLicenseRequest withRequest(EnterpriseAdminUpgradeLicenseRequestBody request) {
        this.request = request;
        return this;
    }
}