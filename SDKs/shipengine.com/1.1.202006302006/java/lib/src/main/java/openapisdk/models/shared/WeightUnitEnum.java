package openapisdk.models.shared;


public enum WeightUnitEnum {
    POUND("pound"),
    OUNCE("ounce"),
    GRAM("gram"),
    KILOGRAM("kilogram");

    public final String value;

    private WeightUnitEnum(String value) {
        this.value = value;
    }
}
