package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsGenerateRandomBytesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public CloudkmsProjectsLocationsGenerateRandomBytesPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}