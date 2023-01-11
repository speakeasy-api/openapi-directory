package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomLogoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public CreateCustomLogoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}