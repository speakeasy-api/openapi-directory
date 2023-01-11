package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
public class ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related")
    public Object related;
    public ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks withRelated(Object related) {
        this.related = related;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}