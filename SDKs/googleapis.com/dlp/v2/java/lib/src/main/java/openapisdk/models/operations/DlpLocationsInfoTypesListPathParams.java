package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpLocationsInfoTypesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpLocationsInfoTypesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}