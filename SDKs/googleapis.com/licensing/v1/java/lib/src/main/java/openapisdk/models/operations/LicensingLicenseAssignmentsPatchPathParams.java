package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public LicensingLicenseAssignmentsPatchPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=skuId")
    public String skuId;
    public LicensingLicenseAssignmentsPatchPathParams withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public LicensingLicenseAssignmentsPatchPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}