package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}