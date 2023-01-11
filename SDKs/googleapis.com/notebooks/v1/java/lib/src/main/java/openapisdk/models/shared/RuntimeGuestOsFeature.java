package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeGuestOsFeature
 * Optional. A list of features to enable on the guest operating system. Applicable only for bootable images. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Guest OS features for boot disk.
**/
public class RuntimeGuestOsFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RuntimeGuestOsFeature withType(String type) {
        this.type = type;
        return this;
    }
}