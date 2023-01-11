package openapisdk.models.shared;


public enum WritableCableStatusEnum {
    CONNECTED("connected"),
    PLANNED("planned"),
    DECOMMISSIONING("decommissioning");

    public final String value;

    private WritableCableStatusEnum(String value) {
        this.value = value;
    }
}
