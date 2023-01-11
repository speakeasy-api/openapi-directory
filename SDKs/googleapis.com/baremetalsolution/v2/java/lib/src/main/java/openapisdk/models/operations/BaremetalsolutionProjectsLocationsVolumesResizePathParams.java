package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesResizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volume")
    public String volume;
    public BaremetalsolutionProjectsLocationsVolumesResizePathParams withVolume(String volume) {
        this.volume = volume;
        return this;
    }
}