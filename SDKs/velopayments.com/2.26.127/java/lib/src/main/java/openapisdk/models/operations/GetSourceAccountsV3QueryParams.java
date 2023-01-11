package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSourceAccountsV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fundingAccountId")
    public String fundingAccountId;
    public GetSourceAccountsV3QueryParams withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeUserDeleted")
    public String includeUserDeleted;
    public GetSourceAccountsV3QueryParams withIncludeUserDeleted(String includeUserDeleted) {
        this.includeUserDeleted = includeUserDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetSourceAccountsV3QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetSourceAccountsV3QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public GetSourceAccountsV3QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=physicalAccountId")
    public String physicalAccountId;
    public GetSourceAccountsV3QueryParams withPhysicalAccountId(String physicalAccountId) {
        this.physicalAccountId = physicalAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=physicalAccountName")
    public String physicalAccountName;
    public GetSourceAccountsV3QueryParams withPhysicalAccountName(String physicalAccountName) {
        this.physicalAccountName = physicalAccountName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSourceAccountsV3QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.SourceAccountTypeEnum type;
    public GetSourceAccountsV3QueryParams withType(openapisdk.models.shared.SourceAccountTypeEnum type) {
        this.type = type;
        return this;
    }
}