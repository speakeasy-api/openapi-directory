package openapisdk.models.shared;


public enum DnsKeyAlgorithmEnum {
    RSASHA1("RSASHA1"),
    RSASHA256("RSASHA256"),
    RSASHA512("RSASHA512"),
    ECDSAP256_SHA256("ECDSAP256SHA256"),
    ECDSAP384_SHA384("ECDSAP384SHA384");

    public final String value;

    private DnsKeyAlgorithmEnum(String value) {
        this.value = value;
    }
}
