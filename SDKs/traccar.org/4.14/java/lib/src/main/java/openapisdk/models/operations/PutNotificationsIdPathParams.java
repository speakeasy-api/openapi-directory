package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNotificationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutNotificationsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}