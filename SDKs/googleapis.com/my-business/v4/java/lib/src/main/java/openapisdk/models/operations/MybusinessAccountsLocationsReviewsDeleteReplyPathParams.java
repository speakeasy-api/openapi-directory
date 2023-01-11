package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsReviewsDeleteReplyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsLocationsReviewsDeleteReplyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}