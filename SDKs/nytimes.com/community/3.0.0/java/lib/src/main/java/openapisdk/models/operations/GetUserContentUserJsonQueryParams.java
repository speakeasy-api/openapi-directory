package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserContentUserJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userID")
    public Long userID;
    public GetUserContentUserJsonQueryParams withUserId(Long userID) {
        this.userID = userID;
        return this;
    }
}