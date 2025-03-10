/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationAlertsProfileRequestBody {
    /**
     * The conditions that determine if the alert triggers
     */
    @JsonProperty("alertCondition")
    public CreateOrganizationAlertsProfileRequestBodyAlertCondition alertCondition;

    public CreateOrganizationAlertsProfileRequestBody withAlertCondition(CreateOrganizationAlertsProfileRequestBodyAlertCondition alertCondition) {
        this.alertCondition = alertCondition;
        return this;
    }
    
    /**
     * User supplied description of the alert
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public CreateOrganizationAlertsProfileRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Networks with these tags will be monitored for the alert
     */
    @JsonProperty("networkTags")
    public String[] networkTags;

    public CreateOrganizationAlertsProfileRequestBody withNetworkTags(String[] networkTags) {
        this.networkTags = networkTags;
        return this;
    }
    
    /**
     * List of recipients that will recieve the alert.
     */
    @JsonProperty("recipients")
    public CreateOrganizationAlertsProfileRequestBodyRecipients recipients;

    public CreateOrganizationAlertsProfileRequestBody withRecipients(CreateOrganizationAlertsProfileRequestBodyRecipients recipients) {
        this.recipients = recipients;
        return this;
    }
    
    /**
     * The alert type
     */
    @JsonProperty("type")
    public CreateOrganizationAlertsProfileRequestBodyTypeEnum type;

    public CreateOrganizationAlertsProfileRequestBody withType(CreateOrganizationAlertsProfileRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public CreateOrganizationAlertsProfileRequestBody(@JsonProperty("alertCondition") CreateOrganizationAlertsProfileRequestBodyAlertCondition alertCondition, @JsonProperty("networkTags") String[] networkTags, @JsonProperty("recipients") CreateOrganizationAlertsProfileRequestBodyRecipients recipients, @JsonProperty("type") CreateOrganizationAlertsProfileRequestBodyTypeEnum type) {
        this.alertCondition = alertCondition;
        this.networkTags = networkTags;
        this.recipients = recipients;
        this.type = type;
  }
}
