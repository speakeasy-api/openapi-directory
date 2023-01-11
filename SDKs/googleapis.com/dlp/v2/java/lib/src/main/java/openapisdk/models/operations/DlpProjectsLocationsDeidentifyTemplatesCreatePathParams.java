package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDeidentifyTemplatesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsLocationsDeidentifyTemplatesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}