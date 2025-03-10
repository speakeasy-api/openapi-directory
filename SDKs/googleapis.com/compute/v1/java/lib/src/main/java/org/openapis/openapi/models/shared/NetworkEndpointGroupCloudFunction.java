/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NetworkEndpointGroupCloudFunction - Configuration for a Cloud Function network endpoint group (NEG). The function must be provided explicitly or in the URL mask. Note: Cloud Function must be in the same project and located in the same region as the Serverless NEG.
 */
public class NetworkEndpointGroupCloudFunction {
    /**
     * A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("function")
    public String function;

    public NetworkEndpointGroupCloudFunction withFunction(String function) {
        this.function = function;
        return this;
    }
    
    /**
     * A template to parse function field from a request URL. URL mask allows for routing to multiple Cloud Functions without having to create multiple Network Endpoint Groups and backend services. For example, request URLs " mydomain.com/function1" and "mydomain.com/function2" can be backed by the same Serverless NEG with URL mask "/&lt;function&gt;". The URL mask will parse them to { function = "function1" } and { function = "function2" } respectively.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlMask")
    public String urlMask;

    public NetworkEndpointGroupCloudFunction withUrlMask(String urlMask) {
        this.urlMask = urlMask;
        return this;
    }
    
    public NetworkEndpointGroupCloudFunction(){}
}
