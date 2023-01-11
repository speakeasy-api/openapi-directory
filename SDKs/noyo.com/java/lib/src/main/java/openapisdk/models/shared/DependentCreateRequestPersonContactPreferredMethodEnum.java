package openapisdk.models.shared;


public enum DependentCreateRequestPersonContactPreferredMethodEnum {
    EMAIL("email"),
    HOME_PHONE("home-phone"),
    MAIL("mail"),
    OTHER("other"),
    WORK_PHONE("work-phone");

    public final String value;

    private DependentCreateRequestPersonContactPreferredMethodEnum(String value) {
        this.value = value;
    }
}
