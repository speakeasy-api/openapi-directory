package openapisdk.models.shared;


public enum ContactCreateRequestTypesEnum {
    BILLING("billing"),
    COMPANY("company"),
    EXECUTIVE("executive"),
    ONLINE("online");

    public final String value;

    private ContactCreateRequestTypesEnum(String value) {
        this.value = value;
    }
}
