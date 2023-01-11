package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}