/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContentFileLinks {
    @JsonProperty("git")
    public String git;

    public ContentFileLinks withGit(String git) {
        this.git = git;
        return this;
    }
    
    @JsonProperty("html")
    public String html;

    public ContentFileLinks withHtml(String html) {
        this.html = html;
        return this;
    }
    
    @JsonProperty("self")
    public String self;

    public ContentFileLinks withSelf(String self) {
        this.self = self;
        return this;
    }
    
    public ContentFileLinks(@JsonProperty("git") String git, @JsonProperty("html") String html, @JsonProperty("self") String self) {
        this.git = git;
        this.html = html;
        this.self = self;
  }
}
