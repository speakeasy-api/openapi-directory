package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentLiasettingsSetinventoryverificationcontactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ContentLiasettingsSetinventoryverificationcontactPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentLiasettingsSetinventoryverificationcontactPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}