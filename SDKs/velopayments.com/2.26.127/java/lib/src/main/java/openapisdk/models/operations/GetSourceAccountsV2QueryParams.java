package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceAccountsV2QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fundingAccountId")
    public String fundingAccountId;
    public GetSourceAccountsV2QueryParams withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetSourceAccountsV2QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetSourceAccountsV2QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public GetSourceAccountsV2QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=physicalAccountId")
    public String physicalAccountId;
    public GetSourceAccountsV2QueryParams withPhysicalAccountId(String physicalAccountId) {
        this.physicalAccountId = physicalAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=physicalAccountName")
    public String physicalAccountName;
    public GetSourceAccountsV2QueryParams withPhysicalAccountName(String physicalAccountName) {
        this.physicalAccountName = physicalAccountName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSourceAccountsV2QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}