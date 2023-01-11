package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGrossToNetReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetGrossToNetReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetGrossToNetReportOutputQueryParams withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetGrossToNetReportOutputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetGrossToNetReportOutputQueryParams withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxPeriod")
    public String taxPeriod;
    public GetGrossToNetReportOutputQueryParams withTaxPeriod(String taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetGrossToNetReportOutputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}