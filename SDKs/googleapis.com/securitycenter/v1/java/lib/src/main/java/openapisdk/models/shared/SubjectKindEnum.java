package openapisdk.models.shared;


public enum SubjectKindEnum {
    AUTH_TYPE_UNSPECIFIED("AUTH_TYPE_UNSPECIFIED"),
    USER("USER"),
    SERVICEACCOUNT("SERVICEACCOUNT"),
    GROUP("GROUP");

    public final String value;

    private SubjectKindEnum(String value) {
        this.value = value;
    }
}
