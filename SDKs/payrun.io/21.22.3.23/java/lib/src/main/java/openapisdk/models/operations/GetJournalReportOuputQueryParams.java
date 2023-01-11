package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalReportOuputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetJournalReportOuputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LedgerTarget")
    public String ledgerTarget;
    public GetJournalReportOuputQueryParams withLedgerTarget(String ledgerTarget) {
        this.ledgerTarget = ledgerTarget;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayFrequency")
    public String payFrequency;
    public GetJournalReportOuputQueryParams withPayFrequency(String payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxPeriod")
    public String taxPeriod;
    public GetJournalReportOuputQueryParams withTaxPeriod(String taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetJournalReportOuputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}