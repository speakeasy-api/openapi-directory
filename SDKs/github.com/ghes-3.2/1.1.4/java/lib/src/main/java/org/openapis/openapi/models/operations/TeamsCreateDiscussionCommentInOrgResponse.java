/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TeamsCreateDiscussionCommentInOrgResponse {
    
    public String contentType;

    public TeamsCreateDiscussionCommentInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public TeamsCreateDiscussionCommentInOrgResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TeamsCreateDiscussionCommentInOrgResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.TeamDiscussionComment teamDiscussionComment;

    public TeamsCreateDiscussionCommentInOrgResponse withTeamDiscussionComment(org.openapis.openapi.models.shared.TeamDiscussionComment teamDiscussionComment) {
        this.teamDiscussionComment = teamDiscussionComment;
        return this;
    }
    
    public TeamsCreateDiscussionCommentInOrgResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
