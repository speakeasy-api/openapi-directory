package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicLinkWarning
 * Dynamic Links warning messages.
**/
public class DynamicLinkWarning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningCode")
    public DynamicLinkWarningWarningCodeEnum warningCode;
    public DynamicLinkWarning withWarningCode(DynamicLinkWarningWarningCodeEnum warningCode) {
        this.warningCode = warningCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningDocumentLink")
    public String warningDocumentLink;
    public DynamicLinkWarning withWarningDocumentLink(String warningDocumentLink) {
        this.warningDocumentLink = warningDocumentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningMessage")
    public String warningMessage;
    public DynamicLinkWarning withWarningMessage(String warningMessage) {
        this.warningMessage = warningMessage;
        return this;
    }
}