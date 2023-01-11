package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MailerConsoleExporterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MailerConsoleExporterConfigTypeEnum type;
    public MailerConsoleExporterConfig withType(MailerConsoleExporterConfigTypeEnum type) {
        this.type = type;
        return this;
    }
}