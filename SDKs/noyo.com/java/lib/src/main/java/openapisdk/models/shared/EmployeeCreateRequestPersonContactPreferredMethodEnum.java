package openapisdk.models.shared;


public enum EmployeeCreateRequestPersonContactPreferredMethodEnum {
    EMAIL("email"),
    HOME_PHONE("home-phone"),
    MAIL("mail"),
    OTHER("other"),
    WORK_PHONE("work-phone");

    public final String value;

    private EmployeeCreateRequestPersonContactPreferredMethodEnum(String value) {
        this.value = value;
    }
}
