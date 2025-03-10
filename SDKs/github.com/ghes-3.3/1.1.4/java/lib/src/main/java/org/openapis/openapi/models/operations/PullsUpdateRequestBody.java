/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PullsUpdateRequestBody {
    /**
     * The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public String base;

    public PullsUpdateRequestBody withBase(String base) {
        this.base = base;
        return this;
    }
    
    /**
     * The contents of the pull request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;

    public PullsUpdateRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    
    /**
     * Indicates whether [maintainers can modify](https://docs.github.com/enterprise-server@3.3/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer_can_modify")
    public Boolean maintainerCanModify;

    public PullsUpdateRequestBody withMaintainerCanModify(Boolean maintainerCanModify) {
        this.maintainerCanModify = maintainerCanModify;
        return this;
    }
    
    /**
     * State of this Pull Request. Either `open` or `closed`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PullsUpdateRequestBodyStateEnum state;

    public PullsUpdateRequestBody withState(PullsUpdateRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    
    /**
     * The title of the pull request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public PullsUpdateRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public PullsUpdateRequestBody(){}
}
