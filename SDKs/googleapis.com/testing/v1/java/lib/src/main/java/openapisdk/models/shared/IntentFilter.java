package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntentFilter
 * The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
**/
public class IntentFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionNames")
    public String[] actionNames;
    public IntentFilter withActionNames(String[] actionNames) {
        this.actionNames = actionNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryNames")
    public String[] categoryNames;
    public IntentFilter withCategoryNames(String[] categoryNames) {
        this.categoryNames = categoryNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public IntentFilter withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}