package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LaunchProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public LaunchProjectPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}