package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtensionData
 * This class defines an extenstion data on the Publish API
**/
public class ExtensionData {
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public ExtensionData withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedEntityId")
    public String relatedEntityId;
    public ExtensionData withRelatedEntityId(String relatedEntityId) {
        this.relatedEntityId = relatedEntityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedEntitySource")
    public Source relatedEntitySource;
    public ExtensionData withRelatedEntitySource(Source relatedEntitySource) {
        this.relatedEntitySource = relatedEntitySource;
        return this;
    }
    @JsonProperty("relatedEntityType")
    public ExtensionDataRelatedEntityTypeEnum relatedEntityType;
    public ExtensionData withRelatedEntityType(ExtensionDataRelatedEntityTypeEnum relatedEntityType) {
        this.relatedEntityType = relatedEntityType;
        return this;
    }
    @JsonProperty("source")
    public String source;
    public ExtensionData withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ExtensionData withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionNumber")
    public Long versionNumber;
    public ExtensionData withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}