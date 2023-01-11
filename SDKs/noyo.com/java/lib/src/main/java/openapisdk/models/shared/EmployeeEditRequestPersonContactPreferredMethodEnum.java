package openapisdk.models.shared;


public enum EmployeeEditRequestPersonContactPreferredMethodEnum {
    EMAIL("email"),
    HOME_PHONE("home-phone"),
    MAIL("mail"),
    OTHER("other"),
    WORK_PHONE("work-phone");

    public final String value;

    private EmployeeEditRequestPersonContactPreferredMethodEnum(String value) {
        this.value = value;
    }
}
