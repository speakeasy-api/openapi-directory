package openapisdk.models.operations;


public enum PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    SCHEDULED("scheduled"),
    PENDING("pending"),
    FAILED("failed"),
    UNAVAILABLE("unavailable");

    public final String value;

    private PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum(String value) {
        this.value = value;
    }
}
