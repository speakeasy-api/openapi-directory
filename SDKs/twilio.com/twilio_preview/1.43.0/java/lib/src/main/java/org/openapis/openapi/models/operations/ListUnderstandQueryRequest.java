/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListUnderstandQueryRequest {
    /**
     * The unique ID of the parent Assistant.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;

    public ListUnderstandQueryRequest withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    
    /**
     * An ISO language-country string of the sample.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Language")
    public String language;

    public ListUnderstandQueryRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    
    /**
     * The Model Build Sid or unique name of the Model Build to be queried.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ModelBuild")
    public String modelBuild;

    public ListUnderstandQueryRequest withModelBuild(String modelBuild) {
        this.modelBuild = modelBuild;
        return this;
    }
    
    /**
     * The page index. This value is simply for client state.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Page")
    public Long page;

    public ListUnderstandQueryRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;

    public ListUnderstandQueryRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * The page token. This is provided by the API.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;

    public ListUnderstandQueryRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * A string that described the query status. The values can be: pending_review, reviewed, discarded
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public String status;

    public ListUnderstandQueryRequest withStatus(String status) {
        this.status = status;
        return this;
    }
    
    public ListUnderstandQueryRequest(@JsonProperty("AssistantSid") String assistantSid) {
        this.assistantSid = assistantSid;
  }
}
