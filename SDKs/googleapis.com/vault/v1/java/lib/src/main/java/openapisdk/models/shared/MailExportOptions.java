package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MailExportOptions
 * Options for Gmail exports.
**/
public class MailExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportFormat")
    public MailExportOptionsExportFormatEnum exportFormat;
    public MailExportOptions withExportFormat(MailExportOptionsExportFormatEnum exportFormat) {
        this.exportFormat = exportFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showConfidentialModeContent")
    public Boolean showConfidentialModeContent;
    public MailExportOptions withShowConfidentialModeContent(Boolean showConfidentialModeContent) {
        this.showConfidentialModeContent = showConfidentialModeContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useNewExport")
    public Boolean useNewExport;
    public MailExportOptions withUseNewExport(Boolean useNewExport) {
        this.useNewExport = useNewExport;
        return this;
    }
}