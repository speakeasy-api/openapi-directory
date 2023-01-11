package openapisdk.models.shared;


public enum DocumentBoilerplateHandlingEnum {
    BOILERPLATE_HANDLING_UNSPECIFIED("BOILERPLATE_HANDLING_UNSPECIFIED"),
    SKIP_BOILERPLATE("SKIP_BOILERPLATE"),
    KEEP_BOILERPLATE("KEEP_BOILERPLATE");

    public final String value;

    private DocumentBoilerplateHandlingEnum(String value) {
        this.value = value;
    }
}
