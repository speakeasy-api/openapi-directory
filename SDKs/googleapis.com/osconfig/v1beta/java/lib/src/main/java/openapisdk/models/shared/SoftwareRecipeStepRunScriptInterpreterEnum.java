package openapisdk.models.shared;


public enum SoftwareRecipeStepRunScriptInterpreterEnum {
    INTERPRETER_UNSPECIFIED("INTERPRETER_UNSPECIFIED"),
    SHELL("SHELL"),
    POWERSHELL("POWERSHELL");

    public final String value;

    private SoftwareRecipeStepRunScriptInterpreterEnum(String value) {
        this.value = value;
    }
}
