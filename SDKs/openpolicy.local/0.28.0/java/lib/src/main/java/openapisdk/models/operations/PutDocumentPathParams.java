package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PutDocumentPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}