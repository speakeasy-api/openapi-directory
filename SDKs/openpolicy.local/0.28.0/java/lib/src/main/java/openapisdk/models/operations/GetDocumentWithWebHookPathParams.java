package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentWithWebHookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public GetDocumentWithWebHookPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}