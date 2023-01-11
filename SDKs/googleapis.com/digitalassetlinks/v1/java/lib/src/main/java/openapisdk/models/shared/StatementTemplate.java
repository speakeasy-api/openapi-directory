package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatementTemplate
 * A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
**/
public class StatementTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relation")
    public String relation;
    public StatementTemplate withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Asset source;
    public StatementTemplate withSource(Asset source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public Asset target;
    public StatementTemplate withTarget(Asset target) {
        this.target = target;
        return this;
    }
}