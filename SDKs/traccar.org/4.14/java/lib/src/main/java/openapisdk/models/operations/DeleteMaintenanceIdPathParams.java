package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMaintenanceIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteMaintenanceIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}