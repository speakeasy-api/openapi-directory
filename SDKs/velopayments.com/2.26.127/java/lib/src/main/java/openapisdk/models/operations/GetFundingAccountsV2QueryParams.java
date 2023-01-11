package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFundingAccountsV2QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetFundingAccountsV2QueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetFundingAccountsV2QueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetFundingAccountsV2QueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetFundingAccountsV2QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public GetFundingAccountsV2QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public GetFundingAccountsV2QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetFundingAccountsV2QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetFundingAccountsV2QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.FundingAccountTypeEnum type;
    public GetFundingAccountsV2QueryParams withType(openapisdk.models.shared.FundingAccountTypeEnum type) {
        this.type = type;
        return this;
    }
}