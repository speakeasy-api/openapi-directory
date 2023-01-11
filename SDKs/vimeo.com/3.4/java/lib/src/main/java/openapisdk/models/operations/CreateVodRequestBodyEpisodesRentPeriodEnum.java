package openapisdk.models.operations;


public enum CreateVodRequestBodyEpisodesRentPeriodEnum {
    ONE_WEEK("1 week"),
    ONE_YEAR("1 year"),
    TWENTY_FOUR_HOUR("24 hour"),
    THREE_MONTH("3 month"),
    THIRTY_DAY("30 day"),
    FORTY_EIGHT_HOUR("48 hour"),
    SIX_MONTH("6 month"),
    SEVENTY_TWO_HOUR("72 hour");

    public final String value;

    private CreateVodRequestBodyEpisodesRentPeriodEnum(String value) {
        this.value = value;
    }
}
