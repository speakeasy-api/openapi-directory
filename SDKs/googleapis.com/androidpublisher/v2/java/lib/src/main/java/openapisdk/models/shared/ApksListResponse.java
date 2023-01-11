package openapisdk.models.shared;



public class ApksListResponse {
    public Apk[] apks;
    public ApksListResponse withApks(Apk[] apks) {
        this.apks = apks;
        return this;
    }
    public String kind;
    public ApksListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}