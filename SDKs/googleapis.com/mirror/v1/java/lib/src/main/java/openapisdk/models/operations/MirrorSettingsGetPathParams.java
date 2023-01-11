package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorSettingsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MirrorSettingsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}