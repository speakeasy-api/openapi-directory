package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherUsersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AndroidpublisherUsersDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}