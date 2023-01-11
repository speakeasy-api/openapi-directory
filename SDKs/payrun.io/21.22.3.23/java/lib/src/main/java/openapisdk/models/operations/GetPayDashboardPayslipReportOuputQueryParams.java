package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPayDashboardPayslipReportOuputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployeeCodes")
    public String employeeCodes;
    public GetPayDashboardPayslipReportOuputQueryParams withEmployeeCodes(String employeeCodes) {
        this.employeeCodes = employeeCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetPayDashboardPayslipReportOuputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetPayDashboardPayslipReportOuputQueryParams withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetPayDashboardPayslipReportOuputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaymentDate")
    public LocalDate paymentDate;
    public GetPayDashboardPayslipReportOuputQueryParams withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PublicationDate")
    public LocalDate publicationDate;
    public GetPayDashboardPayslipReportOuputQueryParams withPublicationDate(LocalDate publicationDate) {
        this.publicationDate = publicationDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetPayDashboardPayslipReportOuputQueryParams withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetPayDashboardPayslipReportOuputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransformDefinitionKey")
    public String transformDefinitionKey;
    public GetPayDashboardPayslipReportOuputQueryParams withTransformDefinitionKey(String transformDefinitionKey) {
        this.transformDefinitionKey = transformDefinitionKey;
        return this;
    }
}