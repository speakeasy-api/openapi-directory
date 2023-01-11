package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsPeoplePersonIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=person_id")
    public Long personId;
    public GetUserFollowsPeoplePersonIdPathParams withPersonId(Long personId) {
        this.personId = personId;
        return this;
    }
}