package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public LicensingLicenseAssignmentsInsertPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=skuId")
    public String skuId;
    public LicensingLicenseAssignmentsInsertPathParams withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
}