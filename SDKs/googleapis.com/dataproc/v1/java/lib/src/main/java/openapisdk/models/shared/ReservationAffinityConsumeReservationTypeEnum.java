package openapisdk.models.shared;


public enum ReservationAffinityConsumeReservationTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    NO_RESERVATION("NO_RESERVATION"),
    ANY_RESERVATION("ANY_RESERVATION"),
    SPECIFIC_RESERVATION("SPECIFIC_RESERVATION");

    public final String value;

    private ReservationAffinityConsumeReservationTypeEnum(String value) {
        this.value = value;
    }
}
