/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteMessageSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic,name=password")
    public String password;

    public DeleteMessageSecurity withPassword(String password) {
        this.password = password;
        return this;
    }
    
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic,name=username")
    public String username;

    public DeleteMessageSecurity withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public DeleteMessageSecurity(@JsonProperty("Username") String username, @JsonProperty("Password") String password) {
        this.username = username;
        this.password = password;
  }
}
