/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Alert - Representation of an alert.
 */
public class Alert {
    /**
     * Output only. The localized alert message. This may contain HTML markup, such as phrase elements or links.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public Alert withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * Output only. Resource name of the alert. Format: accounts/{account}/alerts/{alert}
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Alert withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Output only. Severity of this alert.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public AlertSeverityEnum severity;

    public Alert withSeverity(AlertSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    
    /**
     * Output only. Type of alert. This identifies the broad type of this alert, and provides a stable machine-readable identifier that will not be translated. For example, "payment-hold".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public Alert withType(String type) {
        this.type = type;
        return this;
    }
    
    public Alert(){}
}
