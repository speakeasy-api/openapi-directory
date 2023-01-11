package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPapdisReportOuputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetPapdisReportOuputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MessageFunctionCode")
    public String messageFunctionCode;
    public GetPapdisReportOuputQueryParams withMessageFunctionCode(String messageFunctionCode) {
        this.messageFunctionCode = messageFunctionCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetPapdisReportOuputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaymentDate")
    public LocalDate paymentDate;
    public GetPapdisReportOuputQueryParams withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PensionKey")
    public String pensionKey;
    public GetPapdisReportOuputQueryParams withPensionKey(String pensionKey) {
        this.pensionKey = pensionKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetPapdisReportOuputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransformDefinitionKey")
    public String transformDefinitionKey;
    public GetPapdisReportOuputQueryParams withTransformDefinitionKey(String transformDefinitionKey) {
        this.transformDefinitionKey = transformDefinitionKey;
        return this;
    }
}