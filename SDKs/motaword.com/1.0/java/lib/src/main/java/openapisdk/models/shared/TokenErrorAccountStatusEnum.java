package openapisdk.models.shared;


public enum TokenErrorAccountStatusEnum {
    REGISTERED("registered"),
    EMAIL_CONFIRMED("email_confirmed"),
    DELETED("deleted"),
    SUSPENDED("suspended"),
    REJECTED("rejected"),
    APPROVED("approved"),
    RESUME("resume"),
    WEBINAR("webinar"),
    COURSE("course");

    public final String value;

    private TokenErrorAccountStatusEnum(String value) {
        this.value = value;
    }
}
