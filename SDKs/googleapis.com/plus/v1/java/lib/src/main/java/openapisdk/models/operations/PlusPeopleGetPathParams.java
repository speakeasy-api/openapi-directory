package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusPeopleGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PlusPeopleGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}