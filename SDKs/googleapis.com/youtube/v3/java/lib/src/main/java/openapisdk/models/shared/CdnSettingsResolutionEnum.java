package openapisdk.models.shared;


public enum CdnSettingsResolutionEnum {
    TWO_HUNDRED_AND_FORTYP("240p"),
    THREE_HUNDRED_AND_SIXTYP("360p"),
    FOUR_HUNDRED_AND_EIGHTYP("480p"),
    SEVEN_HUNDRED_AND_TWENTYP("720p"),
    ONE_THOUSAND_AND_EIGHTYP("1080p"),
    ONE_THOUSAND_FOUR_HUNDRED_AND_FORTYP("1440p"),
    TWO_THOUSAND_ONE_HUNDRED_AND_SIXTYP("2160p"),
    VARIABLE("variable");

    public final String value;

    private CdnSettingsResolutionEnum(String value) {
        this.value = value;
    }
}
