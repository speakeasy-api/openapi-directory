package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsContentInspectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsLocationsContentInspectPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}