package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsDataItemsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsDatasetsDataItemsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}