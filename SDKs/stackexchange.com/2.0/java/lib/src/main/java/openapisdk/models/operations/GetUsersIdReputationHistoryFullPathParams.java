package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdReputationHistoryFullPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetUsersIdReputationHistoryFullPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}