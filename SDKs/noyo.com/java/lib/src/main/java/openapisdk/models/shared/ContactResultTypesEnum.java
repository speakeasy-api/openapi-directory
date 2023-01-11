package openapisdk.models.shared;


public enum ContactResultTypesEnum {
    BILLING("billing"),
    COMPANY("company"),
    EXECUTIVE("executive"),
    ONLINE("online");

    public final String value;

    private ContactResultTypesEnum(String value) {
        this.value = value;
    }
}
