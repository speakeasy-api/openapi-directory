package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCalendarsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteCalendarsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}