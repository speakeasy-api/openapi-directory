package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InternalAppSharingArtifact
 * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
**/
public class InternalAppSharingArtifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateFingerprint")
    public String certificateFingerprint;
    public InternalAppSharingArtifact withCertificateFingerprint(String certificateFingerprint) {
        this.certificateFingerprint = certificateFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUrl")
    public String downloadUrl;
    public InternalAppSharingArtifact withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256")
    public String sha256;
    public InternalAppSharingArtifact withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
}