package openapisdk.models.shared;


public enum ConsentStatusEnum {
    GRANTED("GRANTED"),
    EXPIRED("EXPIRED"),
    DENIED("DENIED"),
    REQUESTED("REQUESTED"),
    REVOKED("REVOKED");

    public final String value;

    private ConsentStatusEnum(String value) {
        this.value = value;
    }
}
