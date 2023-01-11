package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlatformPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=platformId")
    public String platformId;
    public GetPlatformPathParams withPlatformId(String platformId) {
        this.platformId = platformId;
        return this;
    }
}