package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public LicensingLicenseAssignmentsGetPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=skuId")
    public String skuId;
    public LicensingLicenseAssignmentsGetPathParams withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public LicensingLicenseAssignmentsGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}