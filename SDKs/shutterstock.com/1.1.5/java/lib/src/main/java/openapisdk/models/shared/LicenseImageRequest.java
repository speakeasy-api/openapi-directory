package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LicenseImageRequest
 * Image license request data
**/
public class LicenseImageRequest {
    @JsonProperty("images")
    public LicenseImage[] images;
    public LicenseImageRequest withImages(LicenseImage[] images) {
        this.images = images;
        return this;
    }
}