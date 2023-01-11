package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=negativeKeywordListId")
    public String negativeKeywordListId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams withNegativeKeywordListId(String negativeKeywordListId) {
        this.negativeKeywordListId = negativeKeywordListId;
        return this;
    }
}