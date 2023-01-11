package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=keywordValue")
    public String keywordValue;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams withKeywordValue(String keywordValue) {
        this.keywordValue = keywordValue;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=negativeKeywordListId")
    public String negativeKeywordListId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams withNegativeKeywordListId(String negativeKeywordListId) {
        this.negativeKeywordListId = negativeKeywordListId;
        return this;
    }
}