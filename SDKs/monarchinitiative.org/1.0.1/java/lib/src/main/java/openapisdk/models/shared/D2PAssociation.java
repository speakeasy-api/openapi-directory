package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class D2PAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence_graph")
    public Graph evidenceGraph;
    public D2PAssociation withEvidenceGraph(Graph evidenceGraph) {
        this.evidenceGraph = evidenceGraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence_types")
    public EntityReference[] evidenceTypes;
    public D2PAssociation withEvidenceTypes(EntityReference[] evidenceTypes) {
        this.evidenceTypes = evidenceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public EntityReference frequency;
    public D2PAssociation withFrequency(EntityReference frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public D2PAssociation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negated")
    public Boolean negated;
    public D2PAssociation withNegated(Boolean negated) {
        this.negated = negated;
        return this;
    }
    @JsonProperty("object")
    public BioObjectCore object;
    public D2PAssociation withObject(BioObjectCore object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_eq")
    public String[] objectEq;
    public D2PAssociation withObjectEq(String[] objectEq) {
        this.objectEq = objectEq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_extensions")
    public AnnotationExtension[] objectExtensions;
    public D2PAssociation withObjectExtensions(AnnotationExtension[] objectExtensions) {
        this.objectExtensions = objectExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onset")
    public EntityReference onset;
    public D2PAssociation withOnset(EntityReference onset) {
        this.onset = onset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provided_by")
    public String[] providedBy;
    public D2PAssociation withProvidedBy(String[] providedBy) {
        this.providedBy = providedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publications")
    public EntityReference[] publications;
    public D2PAssociation withPublications(EntityReference[] publications) {
        this.publications = publications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualifiers")
    public String[] qualifiers;
    public D2PAssociation withQualifiers(String[] qualifiers) {
        this.qualifiers = qualifiers;
        return this;
    }
    @JsonProperty("relation")
    public RelationRef relation;
    public D2PAssociation withRelation(RelationRef relation) {
        this.relation = relation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slim")
    public String[] slim;
    public D2PAssociation withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
    @JsonProperty("subject")
    public BioObjectCore subject;
    public D2PAssociation withSubject(BioObjectCore subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject_eq")
    public String[] subjectEq;
    public D2PAssociation withSubjectEq(String[] subjectEq) {
        this.subjectEq = subjectEq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject_extensions")
    public AnnotationExtension[] subjectExtensions;
    public D2PAssociation withSubjectExtensions(AnnotationExtension[] subjectExtensions) {
        this.subjectExtensions = subjectExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public D2PAssociation withType(String type) {
        this.type = type;
        return this;
    }
}