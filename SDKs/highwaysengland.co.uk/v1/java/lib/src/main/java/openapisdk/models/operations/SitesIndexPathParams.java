package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SitesIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public SitesIndexPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}