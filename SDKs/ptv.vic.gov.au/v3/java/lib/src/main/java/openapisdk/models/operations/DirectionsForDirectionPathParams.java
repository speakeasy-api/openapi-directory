package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DirectionsForDirectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=direction_id")
    public Integer directionId;
    public DirectionsForDirectionPathParams withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
}