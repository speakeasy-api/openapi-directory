package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnnotationExtension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filler")
    public NamedObject filler;
    public AnnotationExtension withFiller(NamedObject filler) {
        this.filler = filler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relation_chain")
    public Relation[] relationChain;
    public AnnotationExtension withRelationChain(Relation[] relationChain) {
        this.relationChain = relationChain;
        return this;
    }
}