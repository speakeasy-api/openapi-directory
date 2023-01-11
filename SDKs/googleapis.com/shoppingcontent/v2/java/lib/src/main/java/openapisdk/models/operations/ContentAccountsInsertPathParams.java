package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentAccountsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentAccountsInsertPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}