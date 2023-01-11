package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppIntegrity
 * Contains the application integrity information.
**/
public class AppIntegrity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appRecognitionVerdict")
    public AppIntegrityAppRecognitionVerdictEnum appRecognitionVerdict;
    public AppIntegrity withAppRecognitionVerdict(AppIntegrityAppRecognitionVerdictEnum appRecognitionVerdict) {
        this.appRecognitionVerdict = appRecognitionVerdict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateSha256Digest")
    public String[] certificateSha256Digest;
    public AppIntegrity withCertificateSha256Digest(String[] certificateSha256Digest) {
        this.certificateSha256Digest = certificateSha256Digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public AppIntegrity withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCode")
    public String versionCode;
    public AppIntegrity withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}