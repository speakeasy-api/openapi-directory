package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPlatformRegionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=platformId")
    public String platformId;
    public ListPlatformRegionsPathParams withPlatformId(String platformId) {
        this.platformId = platformId;
        return this;
    }
}