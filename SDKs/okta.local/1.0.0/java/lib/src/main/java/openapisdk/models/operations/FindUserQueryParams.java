package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public FindUserQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}