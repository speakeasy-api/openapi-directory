package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionConfirmationBody {
    @JsonProperty("cancelButtonLabel")
    public String cancelButtonLabel;
    public ActionConfirmationBody withCancelButtonLabel(String cancelButtonLabel) {
        this.cancelButtonLabel = cancelButtonLabel;
        return this;
    }
    @JsonProperty("confirmButtonLabel")
    public String confirmButtonLabel;
    public ActionConfirmationBody withConfirmButtonLabel(String confirmButtonLabel) {
        this.confirmButtonLabel = confirmButtonLabel;
        return this;
    }
    @JsonProperty("prompt")
    public String prompt;
    public ActionConfirmationBody withPrompt(String prompt) {
        this.prompt = prompt;
        return this;
    }
}