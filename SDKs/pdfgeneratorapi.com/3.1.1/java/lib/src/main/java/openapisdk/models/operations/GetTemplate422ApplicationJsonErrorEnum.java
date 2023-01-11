package openapisdk.models.operations;


public enum GetTemplate422ApplicationJsonErrorEnum {
    UNABLE_TO_PARSE_JSON_PLEASE_CHECK_FORMATTING("Unable to parse JSON, please check formatting"),
    REQUIRED_PARAMETER_MISSING("Required parameter missing"),
    REQUIRED_PARAMETER_MISSING_TEMPLATE_DEFINITION_NOT_DEFINED("Required parameter missing: template definition not defined"),
    REQUIRED_PARAMETER_MISSING_TEMPLATE_NOT_DEFINED("Required parameter missing: template not defined");

    public final String value;

    private GetTemplate422ApplicationJsonErrorEnum(String value) {
        this.value = value;
    }
}
