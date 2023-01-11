package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Redirect
 * A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
**/
public class Redirect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glob")
    public String glob;
    public Redirect withGlob(String glob) {
        this.glob = glob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Redirect withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public Redirect withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public Integer statusCode;
    public Redirect withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}