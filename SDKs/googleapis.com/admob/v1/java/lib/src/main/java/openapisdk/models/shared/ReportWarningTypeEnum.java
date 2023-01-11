package openapisdk.models.shared;


public enum ReportWarningTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE("DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE"),
    DATA_DELAYED("DATA_DELAYED"),
    OTHER("OTHER"),
    REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY("REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY");

    public final String value;

    private ReportWarningTypeEnum(String value) {
        this.value = value;
    }
}
