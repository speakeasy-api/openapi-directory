package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSentencesFromBookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSentencesFromBookPathParams withId(String id) {
        this.id = id;
        return this;
    }
}