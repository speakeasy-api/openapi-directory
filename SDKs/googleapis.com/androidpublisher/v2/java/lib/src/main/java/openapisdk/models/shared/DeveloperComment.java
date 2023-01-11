package openapisdk.models.shared;



public class DeveloperComment {
    public Timestamp lastModified;
    public DeveloperComment withLastModified(Timestamp lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    public String text;
    public DeveloperComment withText(String text) {
        this.text = text;
        return this;
    }
}