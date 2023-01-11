package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public EditUserPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}