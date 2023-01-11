package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBrandVettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BrandSid")
    public String brandSid;
    public ListBrandVettingPathParams withBrandSid(String brandSid) {
        this.brandSid = brandSid;
        return this;
    }
}