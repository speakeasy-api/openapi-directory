/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PutWorkspaceSlugMembersMemberSlugNotesIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer,name=Authorization")
    public String bearer;

    public PutWorkspaceSlugMembersMemberSlugNotesIdSecurity withBearer(String bearer) {
        this.bearer = bearer;
        return this;
    }
    
    public PutWorkspaceSlugMembersMemberSlugNotesIdSecurity(@JsonProperty("bearer") String bearer) {
        this.bearer = bearer;
  }
}
