package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemImportRequestOptions
 * An optional object to configure `/item/import` request.
**/
public class ItemImportRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public String webhook;
    public ItemImportRequestOptions withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}