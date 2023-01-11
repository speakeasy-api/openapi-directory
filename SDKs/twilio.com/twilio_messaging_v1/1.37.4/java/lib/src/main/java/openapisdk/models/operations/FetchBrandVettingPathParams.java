package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchBrandVettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BrandSid")
    public String brandSid;
    public FetchBrandVettingPathParams withBrandSid(String brandSid) {
        this.brandSid = brandSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BrandVettingSid")
    public String brandVettingSid;
    public FetchBrandVettingPathParams withBrandVettingSid(String brandVettingSid) {
        this.brandVettingSid = brandVettingSid;
        return this;
    }
}