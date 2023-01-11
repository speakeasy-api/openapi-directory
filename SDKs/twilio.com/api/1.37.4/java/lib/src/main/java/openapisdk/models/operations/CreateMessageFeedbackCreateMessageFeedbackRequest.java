package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageFeedbackCreateMessageFeedbackRequest {
    @SpeakeasyMetadata("form:name=Outcome")
    public openapisdk.models.shared.MessageFeedbackEnumOutcomeEnum outcome;
    public CreateMessageFeedbackCreateMessageFeedbackRequest withOutcome(openapisdk.models.shared.MessageFeedbackEnumOutcomeEnum outcome) {
        this.outcome = outcome;
        return this;
    }
}