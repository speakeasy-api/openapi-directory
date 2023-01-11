package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public ImagesPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
}