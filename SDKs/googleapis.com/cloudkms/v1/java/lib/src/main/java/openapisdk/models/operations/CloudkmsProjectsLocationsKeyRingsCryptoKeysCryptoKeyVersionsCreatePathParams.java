package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}