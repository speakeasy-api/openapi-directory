package openapisdk.models.shared;


public enum AgentContactEditRequestTypesEnum {
    BILLING("billing"),
    COMPANY("company"),
    EXECUTIVE("executive"),
    ONLINE("online");

    public final String value;

    private AgentContactEditRequestTypesEnum(String value) {
        this.value = value;
    }
}
