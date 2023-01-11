package openapisdk.models.shared;


public enum TemplateContentsInterpreterEnum {
    UNKNOWN_INTERPRETER("UNKNOWN_INTERPRETER"),
    PYTHON("PYTHON"),
    JINJA("JINJA");

    public final String value;

    private TemplateContentsInterpreterEnum(String value) {
        this.value = value;
    }
}
