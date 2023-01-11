package openapisdk.models.shared;


public enum DependentEditRequestPersonContactPreferredMethodEnum {
    EMAIL("email"),
    HOME_PHONE("home-phone"),
    MAIL("mail"),
    OTHER("other"),
    WORK_PHONE("work-phone");

    public final String value;

    private DependentEditRequestPersonContactPreferredMethodEnum(String value) {
        this.value = value;
    }
}
