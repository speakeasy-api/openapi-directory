package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomLogosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetCustomLogosPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}