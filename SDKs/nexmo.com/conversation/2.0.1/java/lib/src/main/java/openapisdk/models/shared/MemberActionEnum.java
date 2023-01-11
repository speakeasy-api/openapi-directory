package openapisdk.models.shared;


public enum MemberActionEnum {
    INVITE("invite"),
    JOIN("join");

    public final String value;

    private MemberActionEnum(String value) {
        this.value = value;
    }
}
