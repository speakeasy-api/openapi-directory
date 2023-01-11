package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentPosDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentPosDeletePathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeCode")
    public String storeCode;
    public ContentPosDeletePathParams withStoreCode(String storeCode) {
        this.storeCode = storeCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetMerchantId")
    public String targetMerchantId;
    public ContentPosDeletePathParams withTargetMerchantId(String targetMerchantId) {
        this.targetMerchantId = targetMerchantId;
        return this;
    }
}