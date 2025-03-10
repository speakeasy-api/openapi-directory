/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IssueEventProjectCard - Issue Event Project Card
 */
public class IssueEventProjectCard {
    @JsonProperty("column_name")
    public String columnName;

    public IssueEventProjectCard withColumnName(String columnName) {
        this.columnName = columnName;
        return this;
    }
    
    @JsonProperty("id")
    public Long id;

    public IssueEventProjectCard withId(Long id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_column_name")
    public String previousColumnName;

    public IssueEventProjectCard withPreviousColumnName(String previousColumnName) {
        this.previousColumnName = previousColumnName;
        return this;
    }
    
    @JsonProperty("project_id")
    public Long projectId;

    public IssueEventProjectCard withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    
    @JsonProperty("project_url")
    public String projectUrl;

    public IssueEventProjectCard withProjectUrl(String projectUrl) {
        this.projectUrl = projectUrl;
        return this;
    }
    
    @JsonProperty("url")
    public String url;

    public IssueEventProjectCard withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public IssueEventProjectCard(@JsonProperty("column_name") String columnName, @JsonProperty("id") Long id, @JsonProperty("project_id") Long projectId, @JsonProperty("project_url") String projectUrl, @JsonProperty("url") String url) {
        this.columnName = columnName;
        this.id = id;
        this.projectId = projectId;
        this.projectUrl = projectUrl;
        this.url = url;
  }
}
