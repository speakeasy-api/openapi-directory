package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public DeleteCachePathParams withKey(String key) {
        this.key = key;
        return this;
    }
}