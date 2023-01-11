package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataAccessOptions
 * Write a Data Access (Gin) log
**/
public class DataAccessOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logMode")
    public DataAccessOptionsLogModeEnum logMode;
    public DataAccessOptions withLogMode(DataAccessOptionsLogModeEnum logMode) {
        this.logMode = logMode;
        return this;
    }
}