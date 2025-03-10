/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LaunchFlexTemplateRequest - A request to launch a Cloud Dataflow job from a FlexTemplate.
 */
public class LaunchFlexTemplateRequest {
    /**
     * Launch FlexTemplate Parameter.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchParameter")
    public LaunchFlexTemplateParameter launchParameter;

    public LaunchFlexTemplateRequest withLaunchParameter(LaunchFlexTemplateParameter launchParameter) {
        this.launchParameter = launchParameter;
        return this;
    }
    
    /**
     * If true, the request is validated but not actually executed. Defaults to false.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;

    public LaunchFlexTemplateRequest withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
    
    public LaunchFlexTemplateRequest(){}
}
