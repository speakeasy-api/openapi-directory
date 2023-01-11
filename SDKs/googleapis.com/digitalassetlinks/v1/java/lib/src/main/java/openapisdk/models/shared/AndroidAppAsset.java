package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidAppAsset
 * Describes an android app asset.
**/
public class AndroidAppAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public CertificateInfo certificate;
    public AndroidAppAsset withCertificate(CertificateInfo certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public AndroidAppAsset withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}