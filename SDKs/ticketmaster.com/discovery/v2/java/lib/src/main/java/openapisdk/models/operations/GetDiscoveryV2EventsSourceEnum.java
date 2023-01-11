package openapisdk.models.operations;


public enum GetDiscoveryV2EventsSourceEnum {
    TICKETMASTER("ticketmaster"),
    UNIVERSE(" universe"),
    FRONTGATE(" frontgate"),
    TMR(" tmr");

    public final String value;

    private GetDiscoveryV2EventsSourceEnum(String value) {
        this.value = value;
    }
}
