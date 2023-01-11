package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudResourcesettingsV1Value
 * The data in a setting value.
**/
public class GoogleCloudResourcesettingsV1Value {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanValue")
    public Boolean booleanValue;
    public GoogleCloudResourcesettingsV1Value withBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationValue")
    public String durationValue;
    public GoogleCloudResourcesettingsV1Value withDurationValue(String durationValue) {
        this.durationValue = durationValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enumValue")
    public GoogleCloudResourcesettingsV1ValueEnumValue enumValue;
    public GoogleCloudResourcesettingsV1Value withEnumValue(GoogleCloudResourcesettingsV1ValueEnumValue enumValue) {
        this.enumValue = enumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringMapValue")
    public GoogleCloudResourcesettingsV1ValueStringMap stringMapValue;
    public GoogleCloudResourcesettingsV1Value withStringMapValue(GoogleCloudResourcesettingsV1ValueStringMap stringMapValue) {
        this.stringMapValue = stringMapValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringSetValue")
    public GoogleCloudResourcesettingsV1ValueStringSet stringSetValue;
    public GoogleCloudResourcesettingsV1Value withStringSetValue(GoogleCloudResourcesettingsV1ValueStringSet stringSetValue) {
        this.stringSetValue = stringSetValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public GoogleCloudResourcesettingsV1Value withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}