package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallFeedbackUpdateCallFeedbackRequest {
    @SpeakeasyMetadata("form:name=Issue")
    public openapisdk.models.shared.CallFeedbackEnumIssuesEnum[] issue;
    public UpdateCallFeedbackUpdateCallFeedbackRequest withIssue(openapisdk.models.shared.CallFeedbackEnumIssuesEnum[] issue) {
        this.issue = issue;
        return this;
    }
    @SpeakeasyMetadata("form:name=QualityScore")
    public Long qualityScore;
    public UpdateCallFeedbackUpdateCallFeedbackRequest withQualityScore(Long qualityScore) {
        this.qualityScore = qualityScore;
        return this;
    }
}