package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsReviewsUpdateReplyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsLocationsReviewsUpdateReplyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}