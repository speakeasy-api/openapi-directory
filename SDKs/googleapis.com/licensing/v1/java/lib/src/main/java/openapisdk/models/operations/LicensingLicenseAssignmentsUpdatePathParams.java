package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public LicensingLicenseAssignmentsUpdatePathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=skuId")
    public String skuId;
    public LicensingLicenseAssignmentsUpdatePathParams withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public LicensingLicenseAssignmentsUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}