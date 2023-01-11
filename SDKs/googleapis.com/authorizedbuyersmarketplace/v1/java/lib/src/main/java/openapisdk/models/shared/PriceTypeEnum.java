package openapisdk.models.shared;


public enum PriceTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    CPM("CPM"),
    CPD("CPD");

    public final String value;

    private PriceTypeEnum(String value) {
        this.value = value;
    }
}
