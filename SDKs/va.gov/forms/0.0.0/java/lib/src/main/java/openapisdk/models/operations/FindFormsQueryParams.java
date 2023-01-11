package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindFormsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public FindFormsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}