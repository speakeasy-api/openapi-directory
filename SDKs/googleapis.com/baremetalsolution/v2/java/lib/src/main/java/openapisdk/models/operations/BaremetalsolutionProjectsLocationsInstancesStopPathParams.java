package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesStopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BaremetalsolutionProjectsLocationsInstancesStopPathParams withName(String name) {
        this.name = name;
        return this;
    }
}