package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindTweetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FindTweetByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}