package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplicationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_method")
    public String answerMethod;
    public CreateApplicationRequestBody withAnswerMethod(String answerMethod) {
        this.answerMethod = answerMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_url")
    public String answerUrl;
    public CreateApplicationRequestBody withAnswerUrl(String answerUrl) {
        this.answerUrl = answerUrl;
        return this;
    }
    @JsonProperty("api_key")
    public String apiKey;
    public CreateApplicationRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonProperty("api_secret")
    public String apiSecret;
    public CreateApplicationRequestBody withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_method")
    public String eventMethod;
    public CreateApplicationRequestBody withEventMethod(String eventMethod) {
        this.eventMethod = eventMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_url")
    public String eventUrl;
    public CreateApplicationRequestBody withEventUrl(String eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_method")
    public String inboundMethod;
    public CreateApplicationRequestBody withInboundMethod(String inboundMethod) {
        this.inboundMethod = inboundMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_url")
    public String inboundUrl;
    public CreateApplicationRequestBody withInboundUrl(String inboundUrl) {
        this.inboundUrl = inboundUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateApplicationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_method")
    public String statusMethod;
    public CreateApplicationRequestBody withStatusMethod(String statusMethod) {
        this.statusMethod = statusMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_url")
    public String statusUrl;
    public CreateApplicationRequestBody withStatusUrl(String statusUrl) {
        this.statusUrl = statusUrl;
        return this;
    }
    @JsonProperty("type")
    public CreateApplicationRequestBodyTypeEnum type;
    public CreateApplicationRequestBody withType(CreateApplicationRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}