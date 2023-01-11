package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignsFetchAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CampaignsFetchAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CampaignsFetchAllQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public CampaignsFetchAllQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}