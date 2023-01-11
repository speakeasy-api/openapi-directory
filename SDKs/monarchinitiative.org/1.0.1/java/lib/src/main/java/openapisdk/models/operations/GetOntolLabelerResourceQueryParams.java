package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntolLabelerResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetOntolLabelerResourceQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
}