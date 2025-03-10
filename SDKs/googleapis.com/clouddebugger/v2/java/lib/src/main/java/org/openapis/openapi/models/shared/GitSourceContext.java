/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitSourceContext - A GitSourceContext denotes a particular revision in a third party Git repository (e.g. GitHub).
 */
public class GitSourceContext {
    /**
     * Git commit hash. required.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;

    public GitSourceContext withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    
    /**
     * Git repository URL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public GitSourceContext withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public GitSourceContext(){}
}
