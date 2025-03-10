/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query,name=hapikey")
    public String developerHapikey;

    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity withDeveloperHapikey(String developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
    
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity(@JsonProperty("developer_hapikey") String developerHapikey) {
        this.developerHapikey = developerHapikey;
  }
}
