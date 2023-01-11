package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BaremetalsolutionProjectsLocationsVolumesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}