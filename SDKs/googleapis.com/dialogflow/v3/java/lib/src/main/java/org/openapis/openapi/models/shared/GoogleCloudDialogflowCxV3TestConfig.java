/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowCxV3TestConfig - Represents configurations for a test case.
 */
public class GoogleCloudDialogflowCxV3TestConfig {
    /**
     * Flow name to start the test case with. Format: `projects//locations//agents//flows/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flow")
    public String flow;

    public GoogleCloudDialogflowCxV3TestConfig withFlow(String flow) {
        this.flow = flow;
        return this;
    }
    
    /**
     * The page to start the test case with. Format: `projects//locations//agents//flows//pages/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public String page;

    public GoogleCloudDialogflowCxV3TestConfig withPage(String page) {
        this.page = page;
        return this;
    }
    
    /**
     * Session parameters to be compared when calculating differences.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingParameters")
    public String[] trackingParameters;

    public GoogleCloudDialogflowCxV3TestConfig withTrackingParameters(String[] trackingParameters) {
        this.trackingParameters = trackingParameters;
        return this;
    }
    
    public GoogleCloudDialogflowCxV3TestConfig(){}
}
