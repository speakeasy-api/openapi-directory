package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCalendarsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutCalendarsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}