package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AbuseReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abuseTypes")
    public AbuseType[] abuseTypes;
    public AbuseReport withAbuseTypes(AbuseType[] abuseTypes) {
        this.abuseTypes = abuseTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AbuseReport withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedEntities")
    public RelatedEntity[] relatedEntities;
    public AbuseReport withRelatedEntities(RelatedEntity[] relatedEntities) {
        this.relatedEntities = relatedEntities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public Entity subject;
    public AbuseReport withSubject(Entity subject) {
        this.subject = subject;
        return this;
    }
}