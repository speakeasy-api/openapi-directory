package openapisdk.models.shared;



public class Image {
    public String id;
    public Image withId(String id) {
        this.id = id;
        return this;
    }
    public String sha1;
    public Image withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
    public String sha256;
    public Image withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
    public String url;
    public Image withUrl(String url) {
        this.url = url;
        return this;
    }
}