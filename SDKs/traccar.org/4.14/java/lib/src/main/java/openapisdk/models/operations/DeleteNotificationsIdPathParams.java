package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNotificationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteNotificationsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}