package openapisdk.models.shared;


public enum ContactEditRequestTypesEnum {
    BILLING("billing"),
    COMPANY("company"),
    EXECUTIVE("executive"),
    ONLINE("online");

    public final String value;

    private ContactEditRequestTypesEnum(String value) {
        this.value = value;
    }
}
