package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsJobTriggersHybridInspectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DlpProjectsLocationsJobTriggersHybridInspectPathParams withName(String name) {
        this.name = name;
        return this;
    }
}