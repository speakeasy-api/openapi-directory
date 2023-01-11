package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeFilteringReasons
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
public class CreativeFilteringReasons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public CreativeFilteringReasons withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public CreativeFilteringReasonsReasons[] reasons;
    public CreativeFilteringReasons withReasons(CreativeFilteringReasonsReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
}