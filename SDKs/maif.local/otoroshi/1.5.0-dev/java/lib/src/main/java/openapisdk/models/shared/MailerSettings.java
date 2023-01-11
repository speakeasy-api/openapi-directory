package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MailerSettings
 * Configuration for mailgun api client
**/
public class MailerSettings {
    @JsonProperty("apiKey")
    public String apiKey;
    public MailerSettings withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyPrivate")
    public String apiKeyPrivate;
    public MailerSettings withApiKeyPrivate(String apiKeyPrivate) {
        this.apiKeyPrivate = apiKeyPrivate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyPublic")
    public String apiKeyPublic;
    public MailerSettings withApiKeyPublic(String apiKeyPublic) {
        this.apiKeyPublic = apiKeyPublic;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public MailerSettings withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eu")
    public Boolean eu;
    public MailerSettings withEu(Boolean eu) {
        this.eu = eu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public java.util.Map<String, String> header;
    public MailerSettings withHeader(java.util.Map<String, String> header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MailerSettings withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MailerSettings withUrl(String url) {
        this.url = url;
        return this;
    }
}