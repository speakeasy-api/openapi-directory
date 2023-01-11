package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDiscountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=discountUuid")
    public String discountUuid;
    public UpdateDiscountPathParams withDiscountUuid(String discountUuid) {
        this.discountUuid = discountUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationUuid")
    public String organizationUuid;
    public UpdateDiscountPathParams withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
}