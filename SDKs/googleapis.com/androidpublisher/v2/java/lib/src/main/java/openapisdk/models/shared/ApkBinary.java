package openapisdk.models.shared;



/**
 * ApkBinary
 * Represents the binary payload of an APK.
**/
public class ApkBinary {
    public String sha1;
    public ApkBinary withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
    public String sha256;
    public ApkBinary withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
}