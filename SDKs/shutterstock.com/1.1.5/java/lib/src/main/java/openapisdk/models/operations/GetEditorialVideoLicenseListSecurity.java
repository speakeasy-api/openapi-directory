package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialVideoLicenseListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode;
    public GetEditorialVideoLicenseListSecurity withCustomerAccessCode(openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode) {
        this.customerAccessCode = customerAccessCode;
        return this;
    }
}