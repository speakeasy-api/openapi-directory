package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesTagHoldsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudresourcemanagerTagValuesTagHoldsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}