package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CallToAction
 * An action that is performed when the user clicks through the post
**/
public class CallToAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public CallToActionActionTypeEnum actionType;
    public CallToAction withActionType(CallToActionActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CallToAction withUrl(String url) {
        this.url = url;
        return this;
    }
}