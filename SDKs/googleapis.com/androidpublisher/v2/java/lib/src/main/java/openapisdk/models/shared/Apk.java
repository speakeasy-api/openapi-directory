package openapisdk.models.shared;



public class Apk {
    public ApkBinary binary;
    public Apk withBinary(ApkBinary binary) {
        this.binary = binary;
        return this;
    }
    public Integer versionCode;
    public Apk withVersionCode(Integer versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}