package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudResourcesettingsV1Setting
 * The schema for settings.
**/
public class GoogleCloudResourcesettingsV1Setting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveValue")
    public GoogleCloudResourcesettingsV1Value effectiveValue;
    public GoogleCloudResourcesettingsV1Setting withEffectiveValue(GoogleCloudResourcesettingsV1Value effectiveValue) {
        this.effectiveValue = effectiveValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudResourcesettingsV1Setting withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localValue")
    public GoogleCloudResourcesettingsV1Value localValue;
    public GoogleCloudResourcesettingsV1Setting withLocalValue(GoogleCloudResourcesettingsV1Value localValue) {
        this.localValue = localValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public GoogleCloudResourcesettingsV1SettingMetadata metadata;
    public GoogleCloudResourcesettingsV1Setting withMetadata(GoogleCloudResourcesettingsV1SettingMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudResourcesettingsV1Setting withName(String name) {
        this.name = name;
        return this;
    }
}