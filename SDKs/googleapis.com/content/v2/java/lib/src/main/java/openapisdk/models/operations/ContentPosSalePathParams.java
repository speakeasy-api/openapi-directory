package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentPosSalePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentPosSalePathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetMerchantId")
    public String targetMerchantId;
    public ContentPosSalePathParams withTargetMerchantId(String targetMerchantId) {
        this.targetMerchantId = targetMerchantId;
        return this;
    }
}