package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=json")
    public String json;
    public LookupQueryParams withJson(String json) {
        this.json = json;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=number")
    public String[] number;
    public LookupQueryParams withNumber(String[] number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public LookupQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}