package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Object end;
    public QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate withEnd(Object end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate withStart(String start) {
        this.start = start;
        return this;
    }
}