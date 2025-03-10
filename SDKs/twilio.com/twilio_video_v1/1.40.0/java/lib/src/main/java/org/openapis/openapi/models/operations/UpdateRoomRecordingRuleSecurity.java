/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateRoomRecordingRuleSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic,name=password")
    public String password;
    public UpdateRoomRecordingRuleSecurity withPassword(String password) {
        this.password = password;
        return this;
    }
    
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic,name=username")
    public String username;
    public UpdateRoomRecordingRuleSecurity withUsername(String username) {
        this.username = username;
        return this;
    }
    
}
