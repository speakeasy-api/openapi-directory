package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput
 * Data specific to Android app streams.
**/
public class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}