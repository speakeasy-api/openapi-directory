package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscribeToEventBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypt")
    public Boolean encrypt;
    public SubscribeToEventBody withEncrypt(Boolean encrypt) {
        this.encrypt = encrypt;
        return this;
    }
    @JsonProperty("publicationUrl")
    public String publicationUrl;
    public SubscribeToEventBody withPublicationUrl(String publicationUrl) {
        this.publicationUrl = publicationUrl;
        return this;
    }
    @JsonProperty("topics")
    public String topics;
    public SubscribeToEventBody withTopics(String topics) {
        this.topics = topics;
        return this;
    }
}