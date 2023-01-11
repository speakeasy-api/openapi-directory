package openapisdk.models.operations;


public enum GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    SCHEDULED("scheduled"),
    PENDING("pending"),
    FAILED("failed"),
    UNAVAILABLE("unavailable");

    public final String value;

    private GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum(String value) {
        this.value = value;
    }
}
