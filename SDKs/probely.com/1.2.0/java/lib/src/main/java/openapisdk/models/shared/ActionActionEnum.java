package openapisdk.models.shared;


public enum ActionActionEnum {
    NULL_("null"),
    TRIAL("trial"),
    PLAN("plan"),
    SUBSCRIBE("subscribe");

    public final String value;

    private ActionActionEnum(String value) {
        this.value = value;
    }
}
