package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=negativeKeywordListId")
    public String negativeKeywordListId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListPathParams withNegativeKeywordListId(String negativeKeywordListId) {
        this.negativeKeywordListId = negativeKeywordListId;
        return this;
    }
}