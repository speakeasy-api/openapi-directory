package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimilarVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSimilarVideosPathParams withId(String id) {
        this.id = id;
        return this;
    }
}