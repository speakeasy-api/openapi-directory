package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesResetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BaremetalsolutionProjectsLocationsInstancesResetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}