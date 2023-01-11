package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityAdWordsLinkEntity
 * Web property being linked.
**/
public class EntityAdWordsLinkEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyRef")
    public WebPropertyRef webPropertyRef;
    public EntityAdWordsLinkEntity withWebPropertyRef(WebPropertyRef webPropertyRef) {
        this.webPropertyRef = webPropertyRef;
        return this;
    }
}