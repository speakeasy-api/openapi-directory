package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RowQuestion
 * Configuration for a question that is part of a question group.
**/
public class RowQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public RowQuestion withTitle(String title) {
        this.title = title;
        return this;
    }
}