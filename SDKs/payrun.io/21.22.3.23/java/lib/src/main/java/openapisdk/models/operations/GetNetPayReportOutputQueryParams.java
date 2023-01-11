package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetPayReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetNetPayReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetNetPayReportOutputQueryParams withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetNetPayReportOutputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetNetPayReportOutputQueryParams withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxPeriod")
    public String taxPeriod;
    public GetNetPayReportOutputQueryParams withTaxPeriod(String taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetNetPayReportOutputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}