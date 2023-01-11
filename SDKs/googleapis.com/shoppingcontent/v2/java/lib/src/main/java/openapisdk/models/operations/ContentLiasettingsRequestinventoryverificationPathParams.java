package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentLiasettingsRequestinventoryverificationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ContentLiasettingsRequestinventoryverificationPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public ContentLiasettingsRequestinventoryverificationPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentLiasettingsRequestinventoryverificationPathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}