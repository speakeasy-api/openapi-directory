package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LicenseEditorialVideoContentRequest
 * License editorial video content request
**/
public class LicenseEditorialVideoContentRequest {
    @JsonProperty("country")
    public Object country;
    public LicenseEditorialVideoContentRequest withCountry(Object country) {
        this.country = country;
        return this;
    }
    @JsonProperty("editorial")
    public LicenseEditorialVideoContent[] editorial;
    public LicenseEditorialVideoContentRequest withEditorial(LicenseEditorialVideoContent[] editorial) {
        this.editorial = editorial;
        return this;
    }
}