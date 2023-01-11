package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetP32NetReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetP32NetReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetP32NetReportOutputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}