/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ContentTree - Content Tree
 */
public class ContentTree {
    
    public ContentTreeLinks links;

    public ContentTree withLinks(ContentTreeLinks links) {
        this.links = links;
        return this;
    }
    
    
    public String downloadUrl;

    public ContentTree withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    
    
    public ContentTreeEntries[] entries;

    public ContentTree withEntries(ContentTreeEntries[] entries) {
        this.entries = entries;
        return this;
    }
    
    
    public String gitUrl;

    public ContentTree withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    
    
    public String htmlUrl;

    public ContentTree withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    
    
    public String name;

    public ContentTree withName(String name) {
        this.name = name;
        return this;
    }
    
    
    public String path;

    public ContentTree withPath(String path) {
        this.path = path;
        return this;
    }
    
    
    public String sha;

    public ContentTree withSha(String sha) {
        this.sha = sha;
        return this;
    }
    
    
    public Long size;

    public ContentTree withSize(Long size) {
        this.size = size;
        return this;
    }
    
    
    public String type;

    public ContentTree withType(String type) {
        this.type = type;
        return this;
    }
    
    
    public String url;

    public ContentTree withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public ContentTree(@JsonProperty("_links") ContentTreeLinks links, @JsonProperty("download_url") String downloadUrl, @JsonProperty("git_url") String gitUrl, @JsonProperty("html_url") String htmlUrl, @JsonProperty("name") String name, @JsonProperty("path") String path, @JsonProperty("sha") String sha, @JsonProperty("size") Long size, @JsonProperty("type") String type, @JsonProperty("url") String url) {
        this.links = links;
        this.downloadUrl = downloadUrl;
        this.gitUrl = gitUrl;
        this.htmlUrl = htmlUrl;
        this.name = name;
        this.path = path;
        this.sha = sha;
        this.size = size;
        this.type = type;
        this.url = url;
  }
}
