package openapisdk.models.operations;


public enum MergeTemplate404ApplicationJsonErrorEnum {
    ENTITY_NOT_FOUND("Entity not found"),
    RESOURCE_NOT_FOUND("Resource not found"),
    NONE_OF_THE_TEMPLATES_IS_AVAILABLE_FOR_THE_WORKSPACE("None of the templates is available for the workspace.");

    public final String value;

    private MergeTemplate404ApplicationJsonErrorEnum(String value) {
        this.value = value;
    }
}
