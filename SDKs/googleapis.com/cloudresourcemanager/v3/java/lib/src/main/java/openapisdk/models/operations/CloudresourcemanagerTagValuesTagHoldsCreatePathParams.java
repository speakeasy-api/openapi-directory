package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesTagHoldsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudresourcemanagerTagValuesTagHoldsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}