package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTxsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address")
    public String address;
    public GetTxsQueryParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=block")
    public String block;
    public GetTxsQueryParams withBlock(String block) {
        this.block = block;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageNum")
    public Double pageNum;
    public GetTxsQueryParams withPageNum(Double pageNum) {
        this.pageNum = pageNum;
        return this;
    }
}