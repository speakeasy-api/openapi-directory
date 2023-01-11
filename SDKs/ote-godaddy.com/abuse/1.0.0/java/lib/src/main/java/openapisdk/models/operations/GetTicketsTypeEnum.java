package openapisdk.models.operations;


public enum GetTicketsTypeEnum {
    A_RECORD("A_RECORD"),
    CHILD_ABUSE("CHILD_ABUSE"),
    CONTENT("CONTENT"),
    FRAUD_WIRE("FRAUD_WIRE"),
    IP_BLOCK("IP_BLOCK"),
    MALWARE("MALWARE"),
    NETWORK_ABUSE("NETWORK_ABUSE"),
    PHISHING("PHISHING"),
    SPAM("SPAM");

    public final String value;

    private GetTicketsTypeEnum(String value) {
        this.value = value;
    }
}
