package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MailerMailjetExporterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyPrivate")
    public String apiKeyPrivate;
    public MailerMailjetExporterConfig withApiKeyPrivate(String apiKeyPrivate) {
        this.apiKeyPrivate = apiKeyPrivate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyPublic")
    public String apiKeyPublic;
    public MailerMailjetExporterConfig withApiKeyPublic(String apiKeyPublic) {
        this.apiKeyPublic = apiKeyPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String[] to;
    public MailerMailjetExporterConfig withTo(String[] to) {
        this.to = to;
        return this;
    }
    @JsonProperty("type")
    public MailerMailjetExporterConfigTypeEnum type;
    public MailerMailjetExporterConfig withType(MailerMailjetExporterConfigTypeEnum type) {
        this.type = type;
        return this;
    }
}