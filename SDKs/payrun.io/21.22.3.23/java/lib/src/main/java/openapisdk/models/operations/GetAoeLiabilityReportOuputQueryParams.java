package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAoeLiabilityReportOuputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetAoeLiabilityReportOuputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetAoeLiabilityReportOuputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxPeriod")
    public String taxPeriod;
    public GetAoeLiabilityReportOuputQueryParams withTaxPeriod(String taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetAoeLiabilityReportOuputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransformDefinitionKey")
    public String transformDefinitionKey;
    public GetAoeLiabilityReportOuputQueryParams withTransformDefinitionKey(String transformDefinitionKey) {
        this.transformDefinitionKey = transformDefinitionKey;
        return this;
    }
}