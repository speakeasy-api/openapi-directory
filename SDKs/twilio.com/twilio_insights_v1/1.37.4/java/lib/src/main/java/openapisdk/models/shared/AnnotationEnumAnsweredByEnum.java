package openapisdk.models.shared;


public enum AnnotationEnumAnsweredByEnum {
    UNKNOWN_ANSWERED_BY("unknown_answered_by"),
    HUMAN("human"),
    MACHINE("machine");

    public final String value;

    private AnnotationEnumAnsweredByEnum(String value) {
        this.value = value;
    }
}
