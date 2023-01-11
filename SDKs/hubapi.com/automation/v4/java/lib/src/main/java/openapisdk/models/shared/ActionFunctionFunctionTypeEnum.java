package openapisdk.models.shared;


public enum ActionFunctionFunctionTypeEnum {
    PRE_ACTION_EXECUTION("PRE_ACTION_EXECUTION"),
    PRE_FETCH_OPTIONS("PRE_FETCH_OPTIONS"),
    POST_FETCH_OPTIONS("POST_FETCH_OPTIONS");

    public final String value;

    private ActionFunctionFunctionTypeEnum(String value) {
        this.value = value;
    }
}
