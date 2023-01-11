package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastRecommendationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPodcastRecommendationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}