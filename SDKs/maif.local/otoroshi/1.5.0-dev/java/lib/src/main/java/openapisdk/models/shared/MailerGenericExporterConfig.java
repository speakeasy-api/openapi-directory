package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MailerGenericExporterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public MailerGenericExporterConfig withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String[] to;
    public MailerGenericExporterConfig withTo(String[] to) {
        this.to = to;
        return this;
    }
    @JsonProperty("type")
    public MailerGenericExporterConfigTypeEnum type;
    public MailerGenericExporterConfig withType(MailerGenericExporterConfigTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MailerGenericExporterConfig withUrl(String url) {
        this.url = url;
        return this;
    }
}