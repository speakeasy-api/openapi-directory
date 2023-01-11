package openapisdk.models.operations;


public enum CreateVodPromotionRequestBodyStreamPeriodEnum {
    ONE_WEEK("1_week"),
    ONE_YEAR("1_year"),
    TWENTY_FOUR_HOUR("24_hour"),
    THIRTY_DAY("30_day"),
    THREE_MONTH("3_month"),
    FORTY_EIGHT_HOUR("48_hour"),
    SIX_MONTH("6_month"),
    SEVENTY_TWO_HOUR("72_hour");

    public final String value;

    private CreateVodPromotionRequestBodyStreamPeriodEnum(String value) {
        this.value = value;
    }
}
