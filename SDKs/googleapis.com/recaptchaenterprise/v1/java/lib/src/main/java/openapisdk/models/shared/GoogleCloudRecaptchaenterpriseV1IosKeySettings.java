package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1IosKeySettings
 * Settings specific to keys that can be used by iOS apps.
**/
public class GoogleCloudRecaptchaenterpriseV1IosKeySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAllBundleIds")
    public Boolean allowAllBundleIds;
    public GoogleCloudRecaptchaenterpriseV1IosKeySettings withAllowAllBundleIds(Boolean allowAllBundleIds) {
        this.allowAllBundleIds = allowAllBundleIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedBundleIds")
    public String[] allowedBundleIds;
    public GoogleCloudRecaptchaenterpriseV1IosKeySettings withAllowedBundleIds(String[] allowedBundleIds) {
        this.allowedBundleIds = allowedBundleIds;
        return this;
    }
}