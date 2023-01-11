package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsStoredInfoTypesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsStoredInfoTypesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}