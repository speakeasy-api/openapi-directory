package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBrandVettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BrandSid")
    public String brandSid;
    public CreateBrandVettingPathParams withBrandSid(String brandSid) {
        this.brandSid = brandSid;
        return this;
    }
}