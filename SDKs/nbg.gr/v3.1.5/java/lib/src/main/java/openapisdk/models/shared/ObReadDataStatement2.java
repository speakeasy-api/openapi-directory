package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadDataStatement2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Statement")
    public ObStatement2[] statement;
    public ObReadDataStatement2 withStatement(ObStatement2[] statement) {
        this.statement = statement;
        return this;
    }
}