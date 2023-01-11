package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReviewsReviewIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userAccountId")
    public String userAccountId;
    public DeleteReviewsReviewIdQueryParams withUserAccountId(String userAccountId) {
        this.userAccountId = userAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public DeleteReviewsReviewIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}