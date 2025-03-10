/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchUnderstandModelBuildRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AssistantSid")
    public String assistantSid;
    public FetchUnderstandModelBuildRequest withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchUnderstandModelBuildRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
