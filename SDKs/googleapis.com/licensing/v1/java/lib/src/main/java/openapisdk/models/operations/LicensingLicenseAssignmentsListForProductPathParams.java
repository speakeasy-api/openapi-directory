package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsListForProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public LicensingLicenseAssignmentsListForProductPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}