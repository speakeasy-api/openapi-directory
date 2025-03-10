/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatusCheckPolicy - Status Check Policy
 */
public class StatusCheckPolicy {
    @JsonProperty("checks")
    public StatusCheckPolicyChecks[] checks;

    public StatusCheckPolicy withChecks(StatusCheckPolicyChecks[] checks) {
        this.checks = checks;
        return this;
    }
    
    @JsonProperty("contexts")
    public String[] contexts;

    public StatusCheckPolicy withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
    
    @JsonProperty("contexts_url")
    public String contextsUrl;

    public StatusCheckPolicy withContextsUrl(String contextsUrl) {
        this.contextsUrl = contextsUrl;
        return this;
    }
    
    @JsonProperty("strict")
    public Boolean strict;

    public StatusCheckPolicy withStrict(Boolean strict) {
        this.strict = strict;
        return this;
    }
    
    @JsonProperty("url")
    public String url;

    public StatusCheckPolicy withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public StatusCheckPolicy(@JsonProperty("checks") StatusCheckPolicyChecks[] checks, @JsonProperty("contexts") String[] contexts, @JsonProperty("contexts_url") String contextsUrl, @JsonProperty("strict") Boolean strict, @JsonProperty("url") String url) {
        this.checks = checks;
        this.contexts = contexts;
        this.contextsUrl = contextsUrl;
        this.strict = strict;
        this.url = url;
  }
}
