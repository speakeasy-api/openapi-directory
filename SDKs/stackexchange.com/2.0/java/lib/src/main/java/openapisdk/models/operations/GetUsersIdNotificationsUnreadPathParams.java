package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdNotificationsUnreadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetUsersIdNotificationsUnreadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}