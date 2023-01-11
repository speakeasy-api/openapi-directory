package openapisdk.models.shared;


public enum ConnectionExceptionProblemConnectionIssueEnum {
    TOO_MANY_CONNECTIONS("TooManyConnections"),
    PROVISIONING_SUBSCRIPTION("ProvisioningSubscription");

    public final String value;

    private ConnectionExceptionProblemConnectionIssueEnum(String value) {
        this.value = value;
    }
}
