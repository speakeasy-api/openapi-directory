package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsContentDeidentifyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsLocationsContentDeidentifyPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}