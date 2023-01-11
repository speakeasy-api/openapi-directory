package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastRecommendationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe_mode")
    public Long safeMode;
    public GetPodcastRecommendationsQueryParams withSafeMode(Long safeMode) {
        this.safeMode = safeMode;
        return this;
    }
}