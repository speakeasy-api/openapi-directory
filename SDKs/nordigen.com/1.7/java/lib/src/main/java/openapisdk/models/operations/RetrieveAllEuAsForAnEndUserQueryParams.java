package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveAllEuAsForAnEndUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enduser_id")
    public String enduserId;
    public RetrieveAllEuAsForAnEndUserQueryParams withEnduserId(String enduserId) {
        this.enduserId = enduserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public RetrieveAllEuAsForAnEndUserQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public RetrieveAllEuAsForAnEndUserQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}