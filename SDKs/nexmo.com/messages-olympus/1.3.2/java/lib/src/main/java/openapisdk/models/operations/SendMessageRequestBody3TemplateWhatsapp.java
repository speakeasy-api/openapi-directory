package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3TemplateWhatsapp {
    @JsonProperty("locale")
    public String locale;
    public SendMessageRequestBody3TemplateWhatsapp withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public SendMessageRequestBody3TemplateWhatsappPolicyEnum policy;
    public SendMessageRequestBody3TemplateWhatsapp withPolicy(SendMessageRequestBody3TemplateWhatsappPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
}