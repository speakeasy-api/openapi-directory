package openapisdk.models.operations;


public enum GetCertificatesCertificatesResponseCertificateStatusRenewalEnum {
    SCHEDULED("scheduled"),
    PENDING("pending"),
    FAILED("failed"),
    UNAVAILABLE("unavailable");

    public final String value;

    private GetCertificatesCertificatesResponseCertificateStatusRenewalEnum(String value) {
        this.value = value;
    }
}
