package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateQuestion
 * A date question. Date questions default to just month + day.
**/
public class DateQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeTime")
    public Boolean includeTime;
    public DateQuestion withIncludeTime(Boolean includeTime) {
        this.includeTime = includeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeYear")
    public Boolean includeYear;
    public DateQuestion withIncludeYear(Boolean includeYear) {
        this.includeYear = includeYear;
        return this;
    }
}