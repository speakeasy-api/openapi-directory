package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EarningWithTqs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Float amount;
    public EarningWithTqs withAmount(Float amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public EarningWithTqs withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("due_date")
    public OffsetDateTime dueDate;
    public EarningWithTqs withDueDate(OffsetDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_above_average")
    public Boolean isAboveAverage;
    public EarningWithTqs withIsAboveAverage(Boolean isAboveAverage) {
        this.isAboveAverage = isAboveAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_id")
    public Long projectId;
    public EarningWithTqs withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public EarningWithTqs withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EarningWithTqsStatusEnum status;
    public EarningWithTqs withStatus(EarningWithTqsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strings_edited")
    public Long stringsEdited;
    public EarningWithTqs withStringsEdited(Long stringsEdited) {
        this.stringsEdited = stringsEdited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strings_translated")
    public Long stringsTranslated;
    public EarningWithTqs withStringsTranslated(Long stringsTranslated) {
        this.stringsTranslated = stringsTranslated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words")
    public Long words;
    public EarningWithTqs withWords(Long words) {
        this.words = words;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words_approved")
    public Long wordsApproved;
    public EarningWithTqs withWordsApproved(Long wordsApproved) {
        this.wordsApproved = wordsApproved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words_translated")
    public Long wordsTranslated;
    public EarningWithTqs withWordsTranslated(Long wordsTranslated) {
        this.wordsTranslated = wordsTranslated;
        return this;
    }
}