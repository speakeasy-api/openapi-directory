package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionsByStopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop_id")
    public Integer stopId;
    public DisruptionsGetDisruptionsByStopPathParams withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
}