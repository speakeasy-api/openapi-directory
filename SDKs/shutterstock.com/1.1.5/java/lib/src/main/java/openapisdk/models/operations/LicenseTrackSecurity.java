package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseTrackSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode;
    public LicenseTrackSecurity withCustomerAccessCode(openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode) {
        this.customerAccessCode = customerAccessCode;
        return this;
    }
}