package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPayslip3ReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployeeCodes")
    public String employeeCodes;
    public GetPayslip3ReportOutputQueryParams withEmployeeCodes(String employeeCodes) {
        this.employeeCodes = employeeCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetPayslip3ReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetPayslip3ReportOutputQueryParams withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetPayslip3ReportOutputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaymentDate")
    public LocalDate paymentDate;
    public GetPayslip3ReportOutputQueryParams withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetPayslip3ReportOutputQueryParams withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetPayslip3ReportOutputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransformDefinitionKey")
    public String transformDefinitionKey;
    public GetPayslip3ReportOutputQueryParams withTransformDefinitionKey(String transformDefinitionKey) {
        this.transformDefinitionKey = transformDefinitionKey;
        return this;
    }
}