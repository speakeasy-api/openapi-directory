package openapisdk.models.shared;


public enum GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum {
    BAD_LOCATION_REASON_UNSPECIFIED("BAD_LOCATION_REASON_UNSPECIFIED"),
    OTHER("OTHER"),
    NOT_PEDESTRIAN_ACCESSIBLE("NOT_PEDESTRIAN_ACCESSIBLE"),
    NOT_OPEN_TO_PUBLIC("NOT_OPEN_TO_PUBLIC"),
    PERMANENTLY_CLOSED("PERMANENTLY_CLOSED"),
    TEMPORARILY_INACCESSIBLE("TEMPORARILY_INACCESSIBLE");

    public final String value;

    private GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum(String value) {
        this.value = value;
    }
}
