package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PatchDocumentPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}