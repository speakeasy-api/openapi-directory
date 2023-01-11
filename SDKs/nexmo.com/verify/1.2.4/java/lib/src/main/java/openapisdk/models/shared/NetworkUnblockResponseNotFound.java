package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkUnblockResponseNotFound
 * Not Found
**/
public class NetworkUnblockResponseNotFound {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public NetworkUnblockResponseNotFound withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public NetworkUnblockResponseNotFound withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public NetworkUnblockResponseNotFound withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NetworkUnblockResponseNotFound withType(String type) {
        this.type = type;
        return this;
    }
}