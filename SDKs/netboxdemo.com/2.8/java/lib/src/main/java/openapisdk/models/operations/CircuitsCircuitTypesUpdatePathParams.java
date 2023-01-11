package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTypesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CircuitsCircuitTypesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}