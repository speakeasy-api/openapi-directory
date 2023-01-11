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
    @JsonProperty("attributeId")
    public String attributeId;
    public AttributeMetadata withAttributeId(String attributeId) {
        this.attributeId = attributeId;
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
    @JsonProperty("isDeprecated")
    public Boolean isDeprecated;
    public AttributeMetadata withIsDeprecated(Boolean isDeprecated) {
        this.isDeprecated = isDeprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRepeatable")
    public Boolean isRepeatable;
    public AttributeMetadata withIsRepeatable(Boolean isRepeatable) {
        this.isRepeatable = isRepeatable;
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