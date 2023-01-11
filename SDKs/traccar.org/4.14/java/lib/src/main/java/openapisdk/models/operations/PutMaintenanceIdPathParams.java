package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMaintenanceIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutMaintenanceIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}