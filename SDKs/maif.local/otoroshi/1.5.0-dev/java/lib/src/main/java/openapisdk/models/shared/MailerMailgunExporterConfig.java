package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MailerMailgunExporterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public MailerMailgunExporterConfig withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public MailerMailgunExporterConfig withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eu")
    public Boolean eu;
    public MailerMailgunExporterConfig withEu(Boolean eu) {
        this.eu = eu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String[] to;
    public MailerMailgunExporterConfig withTo(String[] to) {
        this.to = to;
        return this;
    }
    @JsonProperty("type")
    public MailerMailgunExporterConfigTypeEnum type;
    public MailerMailgunExporterConfig withType(MailerMailgunExporterConfigTypeEnum type) {
        this.type = type;
        return this;
    }
}