package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageRecommendationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetImageRecommendationsQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_items")
    public Long maxItems;
    public GetImageRecommendationsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe")
    public Boolean safe;
    public GetImageRecommendationsQueryParams withSafe(Boolean safe) {
        this.safe = safe;
        return this;
    }
}