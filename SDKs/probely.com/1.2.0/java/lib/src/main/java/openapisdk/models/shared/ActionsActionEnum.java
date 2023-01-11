package openapisdk.models.shared;


public enum ActionsActionEnum {
    EDIT("edit"),
    DELETE("delete"),
    TRIAL("trial"),
    PLAN("plan"),
    SUBSCRIBE("subscribe"),
    UNSUBSCRIBE("unsubscribe"),
    ARCHIVE("archive"),
    ACTIVATE("activate");

    public final String value;

    private ActionsActionEnum(String value) {
        this.value = value;
    }
}
