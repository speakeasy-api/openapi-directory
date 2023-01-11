package openapisdk.models.shared;


public enum ChargeBearerEnum {
    DEBT("DEBT"),
    CRED("CRED"),
    SHAR("SHAR"),
    SLEV("SLEV");

    public final String value;

    private ChargeBearerEnum(String value) {
        this.value = value;
    }
}
