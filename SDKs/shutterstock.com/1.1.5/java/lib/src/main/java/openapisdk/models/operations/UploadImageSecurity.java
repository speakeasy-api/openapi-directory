package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadImageSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasic basic;
    public UploadImageSecurity withBasic(openapisdk.models.shared.SchemeBasic basic) {
        this.basic = basic;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode;
    public UploadImageSecurity withCustomerAccessCode(openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode) {
        this.customerAccessCode = customerAccessCode;
        return this;
    }
}