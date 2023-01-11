package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CompactAssociationSet {
    @JsonProperty("objects")
    public String[] objects;
    public CompactAssociationSet withObjects(String[] objects) {
        this.objects = objects;
        return this;
    }
    @JsonProperty("relation")
    public String relation;
    public CompactAssociationSet withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @JsonProperty("subject")
    public String subject;
    public CompactAssociationSet withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}