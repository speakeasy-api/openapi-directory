package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnnotationUpdateAnnotationRequest {
    @SpeakeasyMetadata("form:name=AnsweredBy")
    public openapisdk.models.shared.AnnotationEnumAnsweredByEnum answeredBy;
    public UpdateAnnotationUpdateAnnotationRequest withAnsweredBy(openapisdk.models.shared.AnnotationEnumAnsweredByEnum answeredBy) {
        this.answeredBy = answeredBy;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallScore")
    public Long callScore;
    public UpdateAnnotationUpdateAnnotationRequest withCallScore(Long callScore) {
        this.callScore = callScore;
        return this;
    }
    @SpeakeasyMetadata("form:name=Comment")
    public String comment;
    public UpdateAnnotationUpdateAnnotationRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConnectivityIssue")
    public openapisdk.models.shared.AnnotationEnumConnectivityIssueEnum connectivityIssue;
    public UpdateAnnotationUpdateAnnotationRequest withConnectivityIssue(openapisdk.models.shared.AnnotationEnumConnectivityIssueEnum connectivityIssue) {
        this.connectivityIssue = connectivityIssue;
        return this;
    }
    @SpeakeasyMetadata("form:name=Incident")
    public String incident;
    public UpdateAnnotationUpdateAnnotationRequest withIncident(String incident) {
        this.incident = incident;
        return this;
    }
    @SpeakeasyMetadata("form:name=QualityIssues")
    public String qualityIssues;
    public UpdateAnnotationUpdateAnnotationRequest withQualityIssues(String qualityIssues) {
        this.qualityIssues = qualityIssues;
        return this;
    }
    @SpeakeasyMetadata("form:name=Spam")
    public Boolean spam;
    public UpdateAnnotationUpdateAnnotationRequest withSpam(Boolean spam) {
        this.spam = spam;
        return this;
    }
}