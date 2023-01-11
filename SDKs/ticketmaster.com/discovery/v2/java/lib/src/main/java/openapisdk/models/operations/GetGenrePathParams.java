package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenrePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenrePathParams withId(String id) {
        this.id = id;
        return this;
    }
}