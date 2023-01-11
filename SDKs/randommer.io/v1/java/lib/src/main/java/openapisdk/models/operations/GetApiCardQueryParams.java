package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiCardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetApiCardQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}