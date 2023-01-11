package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InsightsV1CallAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1CallAnnotation withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answered_by")
    public AnnotationEnumAnsweredByEnum answeredBy;
    public InsightsV1CallAnnotation withAnsweredBy(AnnotationEnumAnsweredByEnum answeredBy) {
        this.answeredBy = answeredBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_score")
    public Long callScore;
    public InsightsV1CallAnnotation withCallScore(Long callScore) {
        this.callScore = callScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public InsightsV1CallAnnotation withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public InsightsV1CallAnnotation withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectivity_issue")
    public AnnotationEnumConnectivityIssueEnum connectivityIssue;
    public InsightsV1CallAnnotation withConnectivityIssue(AnnotationEnumConnectivityIssueEnum connectivityIssue) {
        this.connectivityIssue = connectivityIssue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incident")
    public String incident;
    public InsightsV1CallAnnotation withIncident(String incident) {
        this.incident = incident;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality_issues")
    public String[] qualityIssues;
    public InsightsV1CallAnnotation withQualityIssues(String[] qualityIssues) {
        this.qualityIssues = qualityIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spam")
    public Boolean spam;
    public InsightsV1CallAnnotation withSpam(Boolean spam) {
        this.spam = spam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InsightsV1CallAnnotation withUrl(String url) {
        this.url = url;
        return this;
    }
}