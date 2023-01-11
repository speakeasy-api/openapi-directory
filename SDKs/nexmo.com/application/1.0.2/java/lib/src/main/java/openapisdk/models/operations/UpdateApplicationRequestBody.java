package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplicationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_method")
    public String answerMethod;
    public UpdateApplicationRequestBody withAnswerMethod(String answerMethod) {
        this.answerMethod = answerMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_url")
    public String answerUrl;
    public UpdateApplicationRequestBody withAnswerUrl(String answerUrl) {
        this.answerUrl = answerUrl;
        return this;
    }
    @JsonProperty("api_key")
    public String apiKey;
    public UpdateApplicationRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonProperty("api_secret")
    public String apiSecret;
    public UpdateApplicationRequestBody withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_method")
    public String eventMethod;
    public UpdateApplicationRequestBody withEventMethod(String eventMethod) {
        this.eventMethod = eventMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_url")
    public String eventUrl;
    public UpdateApplicationRequestBody withEventUrl(String eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateApplicationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public UpdateApplicationRequestBodyTypeEnum type;
    public UpdateApplicationRequestBody withType(UpdateApplicationRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}