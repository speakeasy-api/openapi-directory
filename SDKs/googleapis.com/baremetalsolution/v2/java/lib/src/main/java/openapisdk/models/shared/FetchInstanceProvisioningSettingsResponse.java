package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchInstanceProvisioningSettingsResponse
 * Response with all provisioning settings.
**/
public class FetchInstanceProvisioningSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public OsImage[] images;
    public FetchInstanceProvisioningSettingsResponse withImages(OsImage[] images) {
        this.images = images;
        return this;
    }
}