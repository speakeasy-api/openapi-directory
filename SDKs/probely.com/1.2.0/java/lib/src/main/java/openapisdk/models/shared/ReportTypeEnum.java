package openapisdk.models.shared;


public enum ReportTypeEnum {
    DEFAULT_("default"),
    OWASP("owasp"),
    PCI("pci");

    public final String value;

    private ReportTypeEnum(String value) {
        this.value = value;
    }
}
