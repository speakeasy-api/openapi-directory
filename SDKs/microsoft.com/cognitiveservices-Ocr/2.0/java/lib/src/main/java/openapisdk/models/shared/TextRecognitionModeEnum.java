package openapisdk.models.shared;


public enum TextRecognitionModeEnum {
    HANDWRITTEN("Handwritten"),
    PRINTED("Printed");

    public final String value;

    private TextRecognitionModeEnum(String value) {
        this.value = value;
    }
}
