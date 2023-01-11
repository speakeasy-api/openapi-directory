package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget_code")
    public String budgetCode;
    public ReportFilter withBudgetCode(String budgetCode) {
        this.budgetCode = budgetCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_from")
    public OffsetDateTime dateFrom;
    public ReportFilter withDateFrom(OffsetDateTime dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_to")
    public OffsetDateTime dateTo;
    public ReportFilter withDateTo(OffsetDateTime dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_languages")
    public String[] sourceLanguages;
    public ReportFilter withSourceLanguages(String[] sourceLanguages) {
        this.sourceLanguages = sourceLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_languages")
    public String[] targetLanguages;
    public ReportFilter withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public Long[] users;
    public ReportFilter withUsers(Long[] users) {
        this.users = users;
        return this;
    }
}