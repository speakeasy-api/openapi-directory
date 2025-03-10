/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SubscriptionsApiDeleteSubscriptionRequest {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;

    public SubscriptionsApiDeleteSubscriptionRequest withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keep")
    public Boolean keep;

    public SubscriptionsApiDeleteSubscriptionRequest withKeep(Boolean keep) {
        this.keep = keep;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;

    public SubscriptionsApiDeleteSubscriptionRequest withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    
    public SubscriptionsApiDeleteSubscriptionRequest(@JsonProperty("X-Api-Key") String xApiKey, @JsonProperty("keep") Boolean keep, @JsonProperty("serial") String serial) {
        this.xApiKey = xApiKey;
        this.keep = keep;
        this.serial = serial;
  }
}
