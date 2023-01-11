package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserList
 * Wrapper for UserList Field value.
**/
public class UserList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public SingleUser[] values;
    public UserList withValues(SingleUser[] values) {
        this.values = values;
        return this;
    }
}