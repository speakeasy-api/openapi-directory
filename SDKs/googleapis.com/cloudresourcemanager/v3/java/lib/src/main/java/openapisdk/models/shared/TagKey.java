package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagKey
 * A TagKey, used to group a set of TagValues.
**/
public class TagKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public TagKey withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TagKey withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public TagKey withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespacedName")
    public String namespacedName;
    public TagKey withNamespacedName(String namespacedName) {
        this.namespacedName = namespacedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public TagKey withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public TagKeyPurposeEnum purpose;
    public TagKey withPurpose(TagKeyPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purposeData")
    public java.util.Map<String, String> purposeData;
    public TagKey withPurposeData(java.util.Map<String, String> purposeData) {
        this.purposeData = purposeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortName")
    public String shortName;
    public TagKey withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public TagKey withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}