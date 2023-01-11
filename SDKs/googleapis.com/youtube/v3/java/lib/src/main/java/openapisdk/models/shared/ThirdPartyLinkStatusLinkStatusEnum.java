package openapisdk.models.shared;


public enum ThirdPartyLinkStatusLinkStatusEnum {
    UNKNOWN("unknown"),
    FAILED("failed"),
    PENDING("pending"),
    LINKED("linked");

    public final String value;

    private ThirdPartyLinkStatusLinkStatusEnum(String value) {
        this.value = value;
    }
}
