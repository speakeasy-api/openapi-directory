package openapisdk.models.shared;


public enum InvitationRoleEnum {
    COURSE_ROLE_UNSPECIFIED("COURSE_ROLE_UNSPECIFIED"),
    STUDENT("STUDENT"),
    TEACHER("TEACHER"),
    OWNER("OWNER");

    public final String value;

    private InvitationRoleEnum(String value) {
        this.value = value;
    }
}
