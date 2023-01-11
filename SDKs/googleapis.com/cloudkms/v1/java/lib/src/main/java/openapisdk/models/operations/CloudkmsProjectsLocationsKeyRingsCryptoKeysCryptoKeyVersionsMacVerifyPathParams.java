package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}