package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MailerSendgridExporterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyPublic")
    public String apiKeyPublic;
    public MailerSendgridExporterConfig withApiKeyPublic(String apiKeyPublic) {
        this.apiKeyPublic = apiKeyPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String[] to;
    public MailerSendgridExporterConfig withTo(String[] to) {
        this.to = to;
        return this;
    }
    @JsonProperty("type")
    public MailerSendgridExporterConfigTypeEnum type;
    public MailerSendgridExporterConfig withType(MailerSendgridExporterConfigTypeEnum type) {
        this.type = type;
        return this;
    }
}