package openapisdk.models.shared;


public enum ProcessingOptionsHtmlSanitizationEnum {
    HTML_SANITIZATION_UNSPECIFIED("HTML_SANITIZATION_UNSPECIFIED"),
    HTML_SANITIZATION_DISABLED("HTML_SANITIZATION_DISABLED"),
    SIMPLE_FORMATTING_ONLY("SIMPLE_FORMATTING_ONLY");

    public final String value;

    private ProcessingOptionsHtmlSanitizationEnum(String value) {
        this.value = value;
    }
}
