package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LighthouseCategoryV5
 * A Lighthouse category.
**/
public class LighthouseCategoryV5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditRefs")
    public AuditRefs[] auditRefs;
    public LighthouseCategoryV5 withAuditRefs(AuditRefs[] auditRefs) {
        this.auditRefs = auditRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LighthouseCategoryV5 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LighthouseCategoryV5 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualDescription")
    public String manualDescription;
    public LighthouseCategoryV5 withManualDescription(String manualDescription) {
        this.manualDescription = manualDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Object score;
    public LighthouseCategoryV5 withScore(Object score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public LighthouseCategoryV5 withTitle(String title) {
        this.title = title;
        return this;
    }
}