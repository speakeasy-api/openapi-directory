package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHackathonsComingFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetHackathonsComingFormatQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
}