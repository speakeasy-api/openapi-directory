package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CircuitsCircuitsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}