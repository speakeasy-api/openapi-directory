package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVerificationTemplateListVerificationTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListVerificationTemplateListVerificationTemplateResponseMeta meta;
    public ListVerificationTemplateListVerificationTemplateResponse withMeta(ListVerificationTemplateListVerificationTemplateResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templates")
    public openapisdk.models.shared.VerifyV2VerificationTemplate[] templates;
    public ListVerificationTemplateListVerificationTemplateResponse withTemplates(openapisdk.models.shared.VerifyV2VerificationTemplate[] templates) {
        this.templates = templates;
        return this;
    }
}