package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackPackageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public TrackPackageQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
}