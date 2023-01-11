package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MemberRestriction
 * The definition of MemberRestriction
**/
public class MemberRestriction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public MemberRestriction withQuery(String query) {
        this.query = query;
        return this;
    }
}