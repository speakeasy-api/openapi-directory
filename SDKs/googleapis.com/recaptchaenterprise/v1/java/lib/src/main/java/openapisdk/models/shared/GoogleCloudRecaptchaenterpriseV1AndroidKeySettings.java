package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1AndroidKeySettings
 * Settings specific to keys that can be used by Android apps.
**/
public class GoogleCloudRecaptchaenterpriseV1AndroidKeySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAllPackageNames")
    public Boolean allowAllPackageNames;
    public GoogleCloudRecaptchaenterpriseV1AndroidKeySettings withAllowAllPackageNames(Boolean allowAllPackageNames) {
        this.allowAllPackageNames = allowAllPackageNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedPackageNames")
    public String[] allowedPackageNames;
    public GoogleCloudRecaptchaenterpriseV1AndroidKeySettings withAllowedPackageNames(String[] allowedPackageNames) {
        this.allowedPackageNames = allowedPackageNames;
        return this;
    }
}