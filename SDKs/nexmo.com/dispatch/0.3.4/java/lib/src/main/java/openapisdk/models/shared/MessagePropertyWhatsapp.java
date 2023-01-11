package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagePropertyWhatsapp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public MessagePropertyWhatsapp withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public MessagePropertyWhatsappPolicyEnum policy;
    public MessagePropertyWhatsapp withPolicy(MessagePropertyWhatsappPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
}