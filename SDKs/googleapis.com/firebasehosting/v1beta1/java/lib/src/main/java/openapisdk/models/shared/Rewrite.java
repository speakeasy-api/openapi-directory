package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rewrite
 * A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
**/
public class Rewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicLinks")
    public Boolean dynamicLinks;
    public Rewrite withDynamicLinks(Boolean dynamicLinks) {
        this.dynamicLinks = dynamicLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("function")
    public String function;
    public Rewrite withFunction(String function) {
        this.function = function;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionRegion")
    public String functionRegion;
    public Rewrite withFunctionRegion(String functionRegion) {
        this.functionRegion = functionRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glob")
    public String glob;
    public Rewrite withGlob(String glob) {
        this.glob = glob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Rewrite withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public Rewrite withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public CloudRunRewrite run;
    public Rewrite withRun(CloudRunRewrite run) {
        this.run = run;
        return this;
    }
}