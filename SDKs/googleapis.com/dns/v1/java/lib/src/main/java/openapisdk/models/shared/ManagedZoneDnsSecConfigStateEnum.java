package openapisdk.models.shared;


public enum ManagedZoneDnsSecConfigStateEnum {
    OFF("off"),
    ON("on"),
    TRANSFER("transfer");

    public final String value;

    private ManagedZoneDnsSecConfigStateEnum(String value) {
        this.value = value;
    }
}
