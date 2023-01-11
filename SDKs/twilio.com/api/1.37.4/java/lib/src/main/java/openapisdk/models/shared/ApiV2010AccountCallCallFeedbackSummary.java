package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountCallCallFeedbackSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountCallCallFeedbackSummary withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_count")
    public Long callCount;
    public ApiV2010AccountCallCallFeedbackSummary withCallCount(Long callCount) {
        this.callCount = callCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_feedback_count")
    public Long callFeedbackCount;
    public ApiV2010AccountCallCallFeedbackSummary withCallFeedbackCount(Long callFeedbackCount) {
        this.callFeedbackCount = callFeedbackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountCallCallFeedbackSummary withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountCallCallFeedbackSummary withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public ApiV2010AccountCallCallFeedbackSummary withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_subaccounts")
    public Boolean includeSubaccounts;
    public ApiV2010AccountCallCallFeedbackSummary withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public Object[] issues;
    public ApiV2010AccountCallCallFeedbackSummary withIssues(Object[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality_score_average")
    public Double qualityScoreAverage;
    public ApiV2010AccountCallCallFeedbackSummary withQualityScoreAverage(Double qualityScoreAverage) {
        this.qualityScoreAverage = qualityScoreAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality_score_median")
    public Double qualityScoreMedian;
    public ApiV2010AccountCallCallFeedbackSummary withQualityScoreMedian(Double qualityScoreMedian) {
        this.qualityScoreMedian = qualityScoreMedian;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality_score_standard_deviation")
    public Double qualityScoreStandardDeviation;
    public ApiV2010AccountCallCallFeedbackSummary withQualityScoreStandardDeviation(Double qualityScoreStandardDeviation) {
        this.qualityScoreStandardDeviation = qualityScoreStandardDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountCallCallFeedbackSummary withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public LocalDate startDate;
    public ApiV2010AccountCallCallFeedbackSummary withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CallFeedbackSummaryEnumStatusEnum status;
    public ApiV2010AccountCallCallFeedbackSummary withStatus(CallFeedbackSummaryEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}