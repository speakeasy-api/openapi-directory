package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1TextPayload
 * Container of information about a piece of text.
**/
public class GoogleCloudDatalabelingV1beta1TextPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textContent")
    public String textContent;
    public GoogleCloudDatalabelingV1beta1TextPayload withTextContent(String textContent) {
        this.textContent = textContent;
        return this;
    }
}