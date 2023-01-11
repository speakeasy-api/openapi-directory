package openapisdk.models.shared;


public enum PowerFeedStatusLabelEnum {
    OFFLINE("Offline"),
    ACTIVE("Active"),
    PLANNED("Planned"),
    FAILED("Failed");

    public final String value;

    private PowerFeedStatusLabelEnum(String value) {
        this.value = value;
    }
}
