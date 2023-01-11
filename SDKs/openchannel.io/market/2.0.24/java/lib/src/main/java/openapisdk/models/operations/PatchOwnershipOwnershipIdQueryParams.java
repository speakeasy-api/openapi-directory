package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOwnershipOwnershipIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PatchOwnershipOwnershipIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expires")
    public Long expires;
    public PatchOwnershipOwnershipIdQueryParams withExpires(Long expires) {
        this.expires = expires;
        return this;
    }
}