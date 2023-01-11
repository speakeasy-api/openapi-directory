package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Association {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence_graph")
    public Graph evidenceGraph;
    public Association withEvidenceGraph(Graph evidenceGraph) {
        this.evidenceGraph = evidenceGraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence_types")
    public EntityReference[] evidenceTypes;
    public Association withEvidenceTypes(EntityReference[] evidenceTypes) {
        this.evidenceTypes = evidenceTypes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Association withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negated")
    public Boolean negated;
    public Association withNegated(Boolean negated) {
        this.negated = negated;
        return this;
    }
    @JsonProperty("object")
    public BioObjectCore object;
    public Association withObject(BioObjectCore object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_eq")
    public String[] objectEq;
    public Association withObjectEq(String[] objectEq) {
        this.objectEq = objectEq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_extensions")
    public AnnotationExtension[] objectExtensions;
    public Association withObjectExtensions(AnnotationExtension[] objectExtensions) {
        this.objectExtensions = objectExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provided_by")
    public String[] providedBy;
    public Association withProvidedBy(String[] providedBy) {
        this.providedBy = providedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publications")
    public EntityReference[] publications;
    public Association withPublications(EntityReference[] publications) {
        this.publications = publications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualifiers")
    public String[] qualifiers;
    public Association withQualifiers(String[] qualifiers) {
        this.qualifiers = qualifiers;
        return this;
    }
    @JsonProperty("relation")
    public RelationRef relation;
    public Association withRelation(RelationRef relation) {
        this.relation = relation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slim")
    public String[] slim;
    public Association withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
    @JsonProperty("subject")
    public BioObjectCore subject;
    public Association withSubject(BioObjectCore subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject_eq")
    public String[] subjectEq;
    public Association withSubjectEq(String[] subjectEq) {
        this.subjectEq = subjectEq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject_extensions")
    public AnnotationExtension[] subjectExtensions;
    public Association withSubjectExtensions(AnnotationExtension[] subjectExtensions) {
        this.subjectExtensions = subjectExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Association withType(String type) {
        this.type = type;
        return this;
    }
}