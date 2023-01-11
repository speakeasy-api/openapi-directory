package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=negativeKeywordListId")
    public String negativeKeywordListId;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams withNegativeKeywordListId(String negativeKeywordListId) {
        this.negativeKeywordListId = negativeKeywordListId;
        return this;
    }
}