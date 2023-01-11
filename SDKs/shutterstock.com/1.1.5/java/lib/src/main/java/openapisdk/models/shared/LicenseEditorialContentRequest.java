package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LicenseEditorialContentRequest
 * License editorial content request
**/
public class LicenseEditorialContentRequest {
    @JsonProperty("country")
    public Object country;
    public LicenseEditorialContentRequest withCountry(Object country) {
        this.country = country;
        return this;
    }
    @JsonProperty("editorial")
    public LicenseEditorialContent[] editorial;
    public LicenseEditorialContentRequest withEditorial(LicenseEditorialContent[] editorial) {
        this.editorial = editorial;
        return this;
    }
}