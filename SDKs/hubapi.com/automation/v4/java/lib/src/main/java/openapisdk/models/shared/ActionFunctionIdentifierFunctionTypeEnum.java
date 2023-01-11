package openapisdk.models.shared;


public enum ActionFunctionIdentifierFunctionTypeEnum {
    PRE_ACTION_EXECUTION("PRE_ACTION_EXECUTION"),
    PRE_FETCH_OPTIONS("PRE_FETCH_OPTIONS"),
    POST_FETCH_OPTIONS("POST_FETCH_OPTIONS");

    public final String value;

    private ActionFunctionIdentifierFunctionTypeEnum(String value) {
        this.value = value;
    }
}
