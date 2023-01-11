package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodeRecommendationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEpisodeRecommendationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}