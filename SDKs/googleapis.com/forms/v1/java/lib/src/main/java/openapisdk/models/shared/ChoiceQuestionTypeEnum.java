package openapisdk.models.shared;


public enum ChoiceQuestionTypeEnum {
    CHOICE_TYPE_UNSPECIFIED("CHOICE_TYPE_UNSPECIFIED"),
    RADIO("RADIO"),
    CHECKBOX("CHECKBOX"),
    DROP_DOWN("DROP_DOWN");

    public final String value;

    private ChoiceQuestionTypeEnum(String value) {
        this.value = value;
    }
}
