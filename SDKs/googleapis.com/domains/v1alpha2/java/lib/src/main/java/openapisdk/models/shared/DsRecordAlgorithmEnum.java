package openapisdk.models.shared;


public enum DsRecordAlgorithmEnum {
    ALGORITHM_UNSPECIFIED("ALGORITHM_UNSPECIFIED"),
    RSAMD5("RSAMD5"),
    DH("DH"),
    DSA("DSA"),
    ECC("ECC"),
    RSASHA1("RSASHA1"),
    DSANSEC3_SHA1("DSANSEC3SHA1"),
    RSASHA1_NSEC3_SHA1("RSASHA1NSEC3SHA1"),
    RSASHA256("RSASHA256"),
    RSASHA512("RSASHA512"),
    ECCGOST("ECCGOST"),
    ECDSAP256_SHA256("ECDSAP256SHA256"),
    ECDSAP384_SHA384("ECDSAP384SHA384"),
    ED25519("ED25519"),
    ED448("ED448"),
    INDIRECT("INDIRECT"),
    PRIVATEDNS("PRIVATEDNS"),
    PRIVATEOID("PRIVATEOID");

    public final String value;

    private DsRecordAlgorithmEnum(String value) {
        this.value = value;
    }
}
