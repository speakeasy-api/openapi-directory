package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherUsersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AndroidpublisherUsersPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}