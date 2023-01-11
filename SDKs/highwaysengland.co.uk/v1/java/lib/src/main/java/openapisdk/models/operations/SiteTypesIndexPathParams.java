package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteTypesIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public SiteTypesIndexPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}