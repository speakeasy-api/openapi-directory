/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback - Feedback for conversation summarization.
 */
public class GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback {
    /**
     * Timestamp when composing of the summary starts.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;

    public GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    
    /**
     * Timestamp when the summary was submitted.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submitTime")
    public String submitTime;

    public GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback withSubmitTime(String submitTime) {
        this.submitTime = submitTime;
        return this;
    }
    
    /**
     * Text of actual submitted summary.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summaryText")
    public String summaryText;

    public GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback withSummaryText(String summaryText) {
        this.summaryText = summaryText;
        return this;
    }
    
    public GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback(){}
}
