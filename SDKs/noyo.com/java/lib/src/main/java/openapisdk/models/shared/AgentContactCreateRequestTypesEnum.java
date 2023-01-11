package openapisdk.models.shared;


public enum AgentContactCreateRequestTypesEnum {
    BILLING("billing"),
    COMPANY("company"),
    EXECUTIVE("executive"),
    ONLINE("online");

    public final String value;

    private AgentContactCreateRequestTypesEnum(String value) {
        this.value = value;
    }
}
