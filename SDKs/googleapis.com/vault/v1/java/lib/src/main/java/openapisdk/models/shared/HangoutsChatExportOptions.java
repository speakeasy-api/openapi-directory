package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HangoutsChatExportOptions
 * Options for Chat exports.
**/
public class HangoutsChatExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportFormat")
    public HangoutsChatExportOptionsExportFormatEnum exportFormat;
    public HangoutsChatExportOptions withExportFormat(HangoutsChatExportOptionsExportFormatEnum exportFormat) {
        this.exportFormat = exportFormat;
        return this;
    }
}