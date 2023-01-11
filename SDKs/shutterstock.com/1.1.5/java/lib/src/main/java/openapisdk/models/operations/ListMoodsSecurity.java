package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMoodsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasic basic;
    public ListMoodsSecurity withBasic(openapisdk.models.shared.SchemeBasic basic) {
        this.basic = basic;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode;
    public ListMoodsSecurity withCustomerAccessCode(openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode) {
        this.customerAccessCode = customerAccessCode;
        return this;
    }
}