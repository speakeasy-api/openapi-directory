package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
public class ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related")
    public Object related;
    public ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks withRelated(Object related) {
        this.related = related;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}