package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsInspectTemplatesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsLocationsInspectTemplatesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}