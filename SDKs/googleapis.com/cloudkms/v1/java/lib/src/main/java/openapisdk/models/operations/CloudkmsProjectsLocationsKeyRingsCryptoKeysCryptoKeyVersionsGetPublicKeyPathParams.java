package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}