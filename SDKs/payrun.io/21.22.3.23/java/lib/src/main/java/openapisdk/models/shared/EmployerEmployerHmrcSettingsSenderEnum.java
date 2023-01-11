package openapisdk.models.shared;


public enum EmployerEmployerHmrcSettingsSenderEnum {
    EMPLOYER("Employer"),
    INDIVIDUAL("Individual"),
    COMPANY("Company"),
    AGENT("Agent"),
    BUREAU("Bureau"),
    PARTNERSHIP("Partnership"),
    TRUST("Trust"),
    GOVERNMENT("Government"),
    ACTING_IN_CAPACITY("ActingInCapacity"),
    OTHER("Other");

    public final String value;

    private EmployerEmployerHmrcSettingsSenderEnum(String value) {
        this.value = value;
    }
}
