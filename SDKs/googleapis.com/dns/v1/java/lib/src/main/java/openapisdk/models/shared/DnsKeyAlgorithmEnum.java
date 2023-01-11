package openapisdk.models.shared;


public enum DnsKeyAlgorithmEnum {
    RSASHA1("rsasha1"),
    RSASHA256("rsasha256"),
    RSASHA512("rsasha512"),
    ECDSAP256SHA256("ecdsap256sha256"),
    ECDSAP384SHA384("ecdsap384sha384");

    public final String value;

    private DnsKeyAlgorithmEnum(String value) {
        this.value = value;
    }
}
