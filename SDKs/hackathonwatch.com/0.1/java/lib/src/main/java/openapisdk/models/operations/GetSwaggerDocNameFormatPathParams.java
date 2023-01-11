package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSwaggerDocNameFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetSwaggerDocNameFormatPathParams withName(String name) {
        this.name = name;
        return this;
    }
}