package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
}