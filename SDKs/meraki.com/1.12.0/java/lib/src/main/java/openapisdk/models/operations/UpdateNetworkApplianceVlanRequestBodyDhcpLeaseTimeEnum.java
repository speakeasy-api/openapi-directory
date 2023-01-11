package openapisdk.models.operations;


public enum UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum {
    THIRTY_MINUTES("30 minutes"),
    ONE_HOUR("1 hour"),
    FOUR_HOURS("4 hours"),
    TWELVE_HOURS("12 hours"),
    ONE_DAY("1 day"),
    ONE_WEEK("1 week");

    public final String value;

    private UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum(String value) {
        this.value = value;
    }
}
