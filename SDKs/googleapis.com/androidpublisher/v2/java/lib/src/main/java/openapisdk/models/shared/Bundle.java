package openapisdk.models.shared;



public class Bundle {
    public String sha1;
    public Bundle withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
    public String sha256;
    public Bundle withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
    public Integer versionCode;
    public Bundle withVersionCode(Integer versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}