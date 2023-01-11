package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPassReportOuputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DocumentId")
    public String documentId;
    public GetPassReportOuputQueryParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetPassReportOuputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IntermediaryId")
    public String intermediaryId;
    public GetPassReportOuputQueryParams withIntermediaryId(String intermediaryId) {
        this.intermediaryId = intermediaryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MessageFunctionCode")
    public String messageFunctionCode;
    public GetPassReportOuputQueryParams withMessageFunctionCode(String messageFunctionCode) {
        this.messageFunctionCode = messageFunctionCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetPassReportOuputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaymentDate")
    public LocalDate paymentDate;
    public GetPassReportOuputQueryParams withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PensionKey")
    public String pensionKey;
    public GetPassReportOuputQueryParams withPensionKey(String pensionKey) {
        this.pensionKey = pensionKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetPassReportOuputQueryParams withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}