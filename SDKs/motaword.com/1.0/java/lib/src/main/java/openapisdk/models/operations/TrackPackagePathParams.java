package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackPackagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TrackPackagePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}