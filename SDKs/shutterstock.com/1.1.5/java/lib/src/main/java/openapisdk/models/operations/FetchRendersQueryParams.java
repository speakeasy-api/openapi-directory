package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRendersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public FetchRendersQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
}