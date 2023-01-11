package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlobByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filename")
    public String filename;
    public GetBlobByIdPathParams withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBlobByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}