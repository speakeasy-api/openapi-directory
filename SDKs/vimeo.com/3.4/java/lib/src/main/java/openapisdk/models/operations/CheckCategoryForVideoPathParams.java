package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckCategoryForVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public CheckCategoryForVideoPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CheckCategoryForVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}