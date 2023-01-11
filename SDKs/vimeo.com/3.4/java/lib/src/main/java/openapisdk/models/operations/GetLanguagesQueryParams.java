package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLanguagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetLanguagesFilterEnum filter;
    public GetLanguagesQueryParams withFilter(GetLanguagesFilterEnum filter) {
        this.filter = filter;
        return this;
    }
}