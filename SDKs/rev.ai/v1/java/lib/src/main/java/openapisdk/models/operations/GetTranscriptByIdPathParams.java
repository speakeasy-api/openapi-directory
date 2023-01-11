package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTranscriptByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTranscriptByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}