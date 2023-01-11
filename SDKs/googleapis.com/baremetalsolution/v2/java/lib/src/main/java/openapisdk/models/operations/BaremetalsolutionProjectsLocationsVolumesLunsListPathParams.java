package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesLunsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BaremetalsolutionProjectsLocationsVolumesLunsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}