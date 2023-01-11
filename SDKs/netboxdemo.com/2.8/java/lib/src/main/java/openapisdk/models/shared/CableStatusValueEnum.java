package openapisdk.models.shared;


public enum CableStatusValueEnum {
    CONNECTED("connected"),
    PLANNED("planned"),
    DECOMMISSIONING("decommissioning");

    public final String value;

    private CableStatusValueEnum(String value) {
        this.value = value;
    }
}
