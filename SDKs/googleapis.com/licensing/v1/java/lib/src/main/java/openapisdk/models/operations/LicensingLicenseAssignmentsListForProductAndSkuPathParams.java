package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsListForProductAndSkuPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public LicensingLicenseAssignmentsListForProductAndSkuPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=skuId")
    public String skuId;
    public LicensingLicenseAssignmentsListForProductAndSkuPathParams withSkuId(String skuId) {
        this.skuId = skuId;
        return this;
    }
}