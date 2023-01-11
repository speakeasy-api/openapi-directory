package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityProvider
 * The service provider that initially published this activity.
**/
public class ActivityProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ActivityProvider withTitle(String title) {
        this.title = title;
        return this;
    }
}