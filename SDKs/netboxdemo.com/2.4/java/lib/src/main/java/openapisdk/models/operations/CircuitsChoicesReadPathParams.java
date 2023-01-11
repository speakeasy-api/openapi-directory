package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsChoicesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CircuitsChoicesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}