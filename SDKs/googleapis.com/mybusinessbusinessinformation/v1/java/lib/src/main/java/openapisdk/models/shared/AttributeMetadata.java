package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributeMetadata
 * Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.
**/
public class AttributeMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public AttributeMetadata withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AttributeMetadata withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupDisplayName")
    public String groupDisplayName;
    public AttributeMetadata withGroupDisplayName(String groupDisplayName) {
        this.groupDisplayName = groupDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public AttributeMetadata withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatable")
    public Boolean repeatable;
    public AttributeMetadata withRepeatable(Boolean repeatable) {
        this.repeatable = repeatable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueMetadata")
    public AttributeValueMetadata[] valueMetadata;
    public AttributeMetadata withValueMetadata(AttributeValueMetadata[] valueMetadata) {
        this.valueMetadata = valueMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public AttributeMetadataValueTypeEnum valueType;
    public AttributeMetadata withValueType(AttributeMetadataValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}