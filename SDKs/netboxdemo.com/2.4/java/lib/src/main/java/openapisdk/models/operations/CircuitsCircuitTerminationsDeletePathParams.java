package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTerminationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CircuitsCircuitTerminationsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}