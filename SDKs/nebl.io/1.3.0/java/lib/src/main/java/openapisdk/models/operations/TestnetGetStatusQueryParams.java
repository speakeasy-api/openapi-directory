package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public TestnetGetStatusQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}