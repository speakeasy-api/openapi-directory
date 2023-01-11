package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudresourcemanagerTagValuesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}