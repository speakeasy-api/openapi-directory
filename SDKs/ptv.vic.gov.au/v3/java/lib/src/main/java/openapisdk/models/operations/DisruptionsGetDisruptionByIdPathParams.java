package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=disruption_id")
    public Long disruptionId;
    public DisruptionsGetDisruptionByIdPathParams withDisruptionId(Long disruptionId) {
        this.disruptionId = disruptionId;
        return this;
    }
}