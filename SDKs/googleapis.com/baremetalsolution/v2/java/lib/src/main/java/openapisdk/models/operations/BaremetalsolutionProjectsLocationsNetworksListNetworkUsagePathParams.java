package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}