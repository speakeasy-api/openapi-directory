package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuditRefs
 * A light reference to an audit by id, used to group and weight audits in a given category.
**/
public class AuditRefs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acronym")
    public String acronym;
    public AuditRefs withAcronym(String acronym) {
        this.acronym = acronym;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public AuditRefs withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AuditRefs withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevantAudits")
    public String[] relevantAudits;
    public AuditRefs withRelevantAudits(String[] relevantAudits) {
        this.relevantAudits = relevantAudits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Double weight;
    public AuditRefs withWeight(Double weight) {
        this.weight = weight;
        return this;
    }
}