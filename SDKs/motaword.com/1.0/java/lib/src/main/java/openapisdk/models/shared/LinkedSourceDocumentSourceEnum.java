package openapisdk.models.shared;


public enum LinkedSourceDocumentSourceEnum {
    DROPBOX("dropbox"),
    GOOGLEDRIVE("googledrive"),
    ICLOUD("icloud");

    public final String value;

    private LinkedSourceDocumentSourceEnum(String value) {
        this.value = value;
    }
}
