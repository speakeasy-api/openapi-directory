package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSchemaVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public ListSchemaVersionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}