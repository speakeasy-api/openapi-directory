package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetStatusQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}