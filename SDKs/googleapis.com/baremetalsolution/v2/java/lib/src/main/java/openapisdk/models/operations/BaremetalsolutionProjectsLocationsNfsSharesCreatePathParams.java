package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsNfsSharesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BaremetalsolutionProjectsLocationsNfsSharesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}