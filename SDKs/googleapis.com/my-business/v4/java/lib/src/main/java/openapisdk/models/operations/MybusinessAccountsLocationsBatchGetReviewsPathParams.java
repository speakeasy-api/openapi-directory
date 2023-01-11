package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsBatchGetReviewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsLocationsBatchGetReviewsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}