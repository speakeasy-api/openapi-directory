/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitignoreTemplate - Gitignore Template
 */
public class GitignoreTemplate {
    @JsonProperty("name")
    public String name;

    public GitignoreTemplate withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonProperty("source")
    public String source;

    public GitignoreTemplate withSource(String source) {
        this.source = source;
        return this;
    }
    
    public GitignoreTemplate(@JsonProperty("name") String name, @JsonProperty("source") String source) {
        this.name = name;
        this.source = source;
  }
}
