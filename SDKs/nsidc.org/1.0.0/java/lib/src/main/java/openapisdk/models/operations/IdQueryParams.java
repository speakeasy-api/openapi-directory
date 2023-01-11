package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public IdQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public IdSourceEnum source;
    public IdQueryParams withSource(IdSourceEnum source) {
        this.source = source;
        return this;
    }
}