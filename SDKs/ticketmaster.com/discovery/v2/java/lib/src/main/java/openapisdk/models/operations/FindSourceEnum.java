package openapisdk.models.operations;


public enum FindSourceEnum {
    TICKETMASTER("ticketmaster"),
    UNIVERSE(" universe"),
    FRONTGATE(" frontgate"),
    TMR(" tmr");

    public final String value;

    private FindSourceEnum(String value) {
        this.value = value;
    }
}
