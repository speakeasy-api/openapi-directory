package openapisdk.models.shared;


public enum OutputAspectRatioEnum {
    SIXTEEN9("16:9"),
    NINE16("9:16"),
    ONE1("1:1"),
    FOUR5("4:5"),
    FOUR3("4:3");

    public final String value;

    private OutputAspectRatioEnum(String value) {
        this.value = value;
    }
}
