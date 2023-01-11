package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOwnershipOwnershipIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostOwnershipOwnershipIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expires")
    public Long expires;
    public PostOwnershipOwnershipIdQueryParams withExpires(Long expires) {
        this.expires = expires;
        return this;
    }
}