package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFundingsV1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetFundingsV1QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetFundingsV1QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public GetFundingsV1QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetFundingsV1QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}