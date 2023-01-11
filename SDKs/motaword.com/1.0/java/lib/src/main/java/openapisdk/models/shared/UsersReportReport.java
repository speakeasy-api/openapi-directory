package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsersReportReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spending")
    public Float spending;
    public UsersReportReport withSpending(Float spending) {
        this.spending = spending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public UsersReportReport withUser(User user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("word_count")
    public Long wordCount;
    public UsersReportReport withWordCount(Long wordCount) {
        this.wordCount = wordCount;
        return this;
    }
}