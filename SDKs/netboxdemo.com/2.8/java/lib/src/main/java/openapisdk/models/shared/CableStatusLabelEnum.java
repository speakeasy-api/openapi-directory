package openapisdk.models.shared;


public enum CableStatusLabelEnum {
    CONNECTED("Connected"),
    PLANNED("Planned"),
    DECOMMISSIONING("Decommissioning");

    public final String value;

    private CableStatusLabelEnum(String value) {
        this.value = value;
    }
}
