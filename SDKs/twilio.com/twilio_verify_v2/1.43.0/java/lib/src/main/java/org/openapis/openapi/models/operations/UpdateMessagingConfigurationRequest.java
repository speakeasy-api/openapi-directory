/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateMessagingConfigurationRequest {
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Country")
    public String country;

    public UpdateMessagingConfigurationRequest withCountry(String country) {
        this.country = country;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateMessagingConfigurationUpdateMessagingConfigurationRequest requestBody;

    public UpdateMessagingConfigurationRequest withRequestBody(UpdateMessagingConfigurationUpdateMessagingConfigurationRequest requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;

    public UpdateMessagingConfigurationRequest withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    
    public UpdateMessagingConfigurationRequest(@JsonProperty("Country") String country, @JsonProperty("ServiceSid") String serviceSid) {
        this.country = country;
        this.serviceSid = serviceSid;
  }
}
