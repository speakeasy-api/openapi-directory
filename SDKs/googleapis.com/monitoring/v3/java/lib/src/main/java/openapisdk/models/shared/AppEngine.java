package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppEngine
 * App Engine service. Learn more at https://cloud.google.com/appengine.
**/
public class AppEngine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moduleId")
    public String moduleId;
    public AppEngine withModuleId(String moduleId) {
        this.moduleId = moduleId;
        return this;
    }
}