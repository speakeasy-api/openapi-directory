/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DatastoreProjectsAllocateIdsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DatastoreProjectsAllocateIdsSecurityOption1 option1;

    public DatastoreProjectsAllocateIdsSecurity withOption1(DatastoreProjectsAllocateIdsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public DatastoreProjectsAllocateIdsSecurityOption2 option2;

    public DatastoreProjectsAllocateIdsSecurity withOption2(DatastoreProjectsAllocateIdsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public DatastoreProjectsAllocateIdsSecurity(){}
}
