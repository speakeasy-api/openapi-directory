package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CircuitsCircuitsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}