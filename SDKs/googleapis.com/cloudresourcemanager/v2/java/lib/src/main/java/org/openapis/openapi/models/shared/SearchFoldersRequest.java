/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SearchFoldersRequest - The request message for searching folders.
 */
public class SearchFoldersRequest {
    /**
     * Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;

    public SearchFoldersRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * Optional. A pagination token returned from a previous call to `SearchFolders` that indicates from where search should continue.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;

    public SearchFoldersRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * Search criteria used to select the Folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, lifecycleState and parent, where the operators `=`, `NOT`, `AND` and `OR` can be used along with the suffix wildcard symbol `*`. The displayName field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. Some example queries are: * Query `displayName=Test*` returns Folder resources whose display name starts with "Test". * Query `lifecycleState=ACTIVE` returns Folder resources with `lifecycleState` set to `ACTIVE`. * Query `parent=folders/123` returns Folder resources that have `folders/123` as a parent resource. * Query `parent=folders/123 AND lifecycleState=ACTIVE` returns active Folder resources that have `folders/123` as a parent resource. * Query `displayName=\\"Test String\\"` returns Folder resources with display names that include both "Test" and "String".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;

    public SearchFoldersRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    
    public SearchFoldersRequest(){}
}
