package openapisdk.models.shared;


public enum EmployeeResultPersonContactPreferredMethodEnum {
    EMAIL("email"),
    HOME_PHONE("home-phone"),
    MAIL("mail"),
    OTHER("other"),
    WORK_PHONE("work-phone");

    public final String value;

    private EmployeeResultPersonContactPreferredMethodEnum(String value) {
        this.value = value;
    }
}
