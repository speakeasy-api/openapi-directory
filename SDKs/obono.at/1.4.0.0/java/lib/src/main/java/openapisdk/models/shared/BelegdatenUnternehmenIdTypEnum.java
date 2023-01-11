package openapisdk.models.shared;


public enum BelegdatenUnternehmenIdTypEnum {
    STEUERNUMMER("steuernummer"),
    UID("uid"),
    GLN("gln");

    public final String value;

    private BelegdatenUnternehmenIdTypEnum(String value) {
        this.value = value;
    }
}
