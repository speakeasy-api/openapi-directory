package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsMovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudresourcemanagerProjectsMovePathParams withName(String name) {
        this.name = name;
        return this;
    }
}