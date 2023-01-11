package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLegPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leg_id")
    public String legId;
    public DeleteLegPathParams withLegId(String legId) {
        this.legId = legId;
        return this;
    }
}