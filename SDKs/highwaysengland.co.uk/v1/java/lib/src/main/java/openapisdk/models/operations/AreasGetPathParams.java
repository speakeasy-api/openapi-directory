package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AreasGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public AreasGetPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}