package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseEditorialVideoContent
 * Individual editorial video content to license
**/
public class LicenseEditorialVideoContent {
    @JsonProperty("editorial_id")
    public String editorialId;
    public LicenseEditorialVideoContent withEditorialId(String editorialId) {
        this.editorialId = editorialId;
        return this;
    }
    @JsonProperty("license")
    public LicenseEditorialVideoContentLicenseEnum license;
    public LicenseEditorialVideoContent withLicense(LicenseEditorialVideoContentLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public LicenseEditorialVideoContent withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public LicenseEditorialVideoContentSizeEnum size;
    public LicenseEditorialVideoContent withSize(LicenseEditorialVideoContentSizeEnum size) {
        this.size = size;
        return this;
    }
}