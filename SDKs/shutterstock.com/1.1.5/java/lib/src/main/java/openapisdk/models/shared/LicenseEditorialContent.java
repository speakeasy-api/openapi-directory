package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseEditorialContent
 * Individual editorial content to license
**/
public class LicenseEditorialContent {
    @JsonProperty("editorial_id")
    public String editorialId;
    public LicenseEditorialContent withEditorialId(String editorialId) {
        this.editorialId = editorialId;
        return this;
    }
    @JsonProperty("license")
    public String license;
    public LicenseEditorialContent withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public LicenseEditorialContent withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public LicenseEditorialContentSizeEnum size;
    public LicenseEditorialContent withSize(LicenseEditorialContentSizeEnum size) {
        this.size = size;
        return this;
    }
}