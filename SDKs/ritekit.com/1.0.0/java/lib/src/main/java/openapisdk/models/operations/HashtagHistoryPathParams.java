package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HashtagHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hashtag")
    public String hashtag;
    public HashtagHistoryPathParams withHashtag(String hashtag) {
        this.hashtag = hashtag;
        return this;
    }
}