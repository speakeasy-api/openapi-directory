package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDeidentifyTemplatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsLocationsDeidentifyTemplatesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}