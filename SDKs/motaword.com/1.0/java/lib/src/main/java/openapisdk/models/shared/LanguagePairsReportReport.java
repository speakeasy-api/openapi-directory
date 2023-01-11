package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LanguagePairsReportReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language_pair")
    public LanguagePairsReportReportLanguagePair languagePair;
    public LanguagePairsReportReport withLanguagePair(LanguagePairsReportReportLanguagePair languagePair) {
        this.languagePair = languagePair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spending")
    public Float spending;
    public LanguagePairsReportReport withSpending(Float spending) {
        this.spending = spending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("word_count")
    public Long wordCount;
    public LanguagePairsReportReport withWordCount(Long wordCount) {
        this.wordCount = wordCount;
        return this;
    }
}