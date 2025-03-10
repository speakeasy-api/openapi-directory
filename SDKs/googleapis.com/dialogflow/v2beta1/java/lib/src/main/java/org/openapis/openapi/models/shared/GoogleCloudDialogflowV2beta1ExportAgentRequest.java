/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowV2beta1ExportAgentRequest - The request message for Agents.ExportAgent.
 */
public class GoogleCloudDialogflowV2beta1ExportAgentRequest {
    /**
     * Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs:///`. If left unspecified, the serialized agent is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentUri")
    public String agentUri;

    public GoogleCloudDialogflowV2beta1ExportAgentRequest withAgentUri(String agentUri) {
        this.agentUri = agentUri;
        return this;
    }
    
    public GoogleCloudDialogflowV2beta1ExportAgentRequest(){}
}
