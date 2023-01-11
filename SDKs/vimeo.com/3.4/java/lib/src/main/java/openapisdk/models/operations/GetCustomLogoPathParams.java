package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomLogoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=logo_id")
    public Double logoId;
    public GetCustomLogoPathParams withLogoId(Double logoId) {
        this.logoId = logoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetCustomLogoPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}