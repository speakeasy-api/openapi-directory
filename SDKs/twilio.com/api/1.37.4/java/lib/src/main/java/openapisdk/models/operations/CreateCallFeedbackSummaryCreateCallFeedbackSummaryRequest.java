package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest {
    @SpeakeasyMetadata("form:name=EndDate")
    public LocalDate endDate;
    public CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=IncludeSubaccounts")
    public Boolean includeSubaccounts;
    public CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @SpeakeasyMetadata("form:name=StartDate")
    public LocalDate startDate;
    public CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest withStatusCallbackMethod(CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
}