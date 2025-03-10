/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReactionsListForIssueRequest {
    /**
     * Returns a single [reaction type](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public ReactionsListForIssueContentEnum content;

    public ReactionsListForIssueRequest withContent(ReactionsListForIssueContentEnum content) {
        this.content = content;
        return this;
    }
    
    /**
     * issue_number parameter
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_number")
    public Long issueNumber;

    public ReactionsListForIssueRequest withIssueNumber(Long issueNumber) {
        this.issueNumber = issueNumber;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;

    public ReactionsListForIssueRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public ReactionsListForIssueRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Results per page (max 100)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public ReactionsListForIssueRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;

    public ReactionsListForIssueRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
    public ReactionsListForIssueRequest(@JsonProperty("issue_number") Long issueNumber, @JsonProperty("owner") String owner, @JsonProperty("repo") String repo) {
        this.issueNumber = issueNumber;
        this.owner = owner;
        this.repo = repo;
  }
}
