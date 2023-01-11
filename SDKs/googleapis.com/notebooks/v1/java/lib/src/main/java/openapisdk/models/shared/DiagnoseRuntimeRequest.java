package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiagnoseRuntimeRequest
 * Request for creating a notebook instance diagnostic file.
**/
public class DiagnoseRuntimeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diagnosticConfig")
    public DiagnosticConfig diagnosticConfig;
    public DiagnoseRuntimeRequest withDiagnosticConfig(DiagnosticConfig diagnosticConfig) {
        this.diagnosticConfig = diagnosticConfig;
        return this;
    }
}