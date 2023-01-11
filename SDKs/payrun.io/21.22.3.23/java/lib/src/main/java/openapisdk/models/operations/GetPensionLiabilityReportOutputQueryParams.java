package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPensionLiabilityReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetPensionLiabilityReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PensionKey")
    public String pensionKey;
    public GetPensionLiabilityReportOutputQueryParams withPensionKey(String pensionKey) {
        this.pensionKey = pensionKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetPensionLiabilityReportOutputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}