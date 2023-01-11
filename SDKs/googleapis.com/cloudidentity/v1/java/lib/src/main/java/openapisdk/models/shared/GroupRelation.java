package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupRelation
 * Message representing a transitive group of a user or a group.
**/
public class GroupRelation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GroupRelation withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public GroupRelation withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupKey")
    public EntityKey groupKey;
    public GroupRelation withGroupKey(EntityKey groupKey) {
        this.groupKey = groupKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GroupRelation withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationType")
    public GroupRelationRelationTypeEnum relationType;
    public GroupRelation withRelationType(GroupRelationRelationTypeEnum relationType) {
        this.relationType = relationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public TransitiveMembershipRole[] roles;
    public GroupRelation withRoles(TransitiveMembershipRole[] roles) {
        this.roles = roles;
        return this;
    }
}