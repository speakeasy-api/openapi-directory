package openapisdk.models.shared;


public enum MailExportOptionsExportFormatEnum {
    EXPORT_FORMAT_UNSPECIFIED("EXPORT_FORMAT_UNSPECIFIED"),
    MBOX("MBOX"),
    PST("PST");

    public final String value;

    private MailExportOptionsExportFormatEnum(String value) {
        this.value = value;
    }
}
