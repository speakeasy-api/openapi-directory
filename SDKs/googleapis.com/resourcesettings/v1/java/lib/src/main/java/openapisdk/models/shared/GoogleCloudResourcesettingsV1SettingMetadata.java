package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudResourcesettingsV1SettingMetadata
 * Metadata about a setting which is not editable by the end user.
**/
public class GoogleCloudResourcesettingsV1SettingMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum dataType;
    public GoogleCloudResourcesettingsV1SettingMetadata withDataType(GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValue")
    public GoogleCloudResourcesettingsV1Value defaultValue;
    public GoogleCloudResourcesettingsV1SettingMetadata withDefaultValue(GoogleCloudResourcesettingsV1Value defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudResourcesettingsV1SettingMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudResourcesettingsV1SettingMetadata withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public GoogleCloudResourcesettingsV1SettingMetadata withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
}