package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageCollectionItemsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode;
    public DeleteImageCollectionItemsSecurity withCustomerAccessCode(openapisdk.models.shared.SchemeCustomerAccessCode customerAccessCode) {
        this.customerAccessCode = customerAccessCode;
        return this;
    }
}