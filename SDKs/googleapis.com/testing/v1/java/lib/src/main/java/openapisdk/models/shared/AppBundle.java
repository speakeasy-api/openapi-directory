package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppBundle
 * An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.
**/
public class AppBundle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleLocation")
    public FileReference bundleLocation;
    public AppBundle withBundleLocation(FileReference bundleLocation) {
        this.bundleLocation = bundleLocation;
        return this;
    }
}