package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetP60ReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployeeCodes")
    public String employeeCodes;
    public GetP60ReportOutputQueryParams withEmployeeCodes(String employeeCodes) {
        this.employeeCodes = employeeCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetP60ReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetP60ReportOutputQueryParams withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetP60ReportOutputQueryParams withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetP60ReportOutputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransformDefinitionKey")
    public String transformDefinitionKey;
    public GetP60ReportOutputQueryParams withTransformDefinitionKey(String transformDefinitionKey) {
        this.transformDefinitionKey = transformDefinitionKey;
        return this;
    }
}