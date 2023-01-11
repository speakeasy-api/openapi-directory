package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}