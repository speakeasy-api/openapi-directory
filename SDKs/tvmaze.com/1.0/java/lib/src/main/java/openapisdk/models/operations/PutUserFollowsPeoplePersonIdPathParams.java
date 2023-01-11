package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserFollowsPeoplePersonIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=person_id")
    public Long personId;
    public PutUserFollowsPeoplePersonIdPathParams withPersonId(Long personId) {
        this.personId = personId;
        return this;
    }
}