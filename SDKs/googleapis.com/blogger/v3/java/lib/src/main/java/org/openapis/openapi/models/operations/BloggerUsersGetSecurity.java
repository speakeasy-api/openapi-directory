/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class BloggerUsersGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerUsersGetSecurityOption1 option1;

    public BloggerUsersGetSecurity withOption1(BloggerUsersGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public BloggerUsersGetSecurityOption2 option2;

    public BloggerUsersGetSecurity withOption2(BloggerUsersGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public BloggerUsersGetSecurity(){}
}
