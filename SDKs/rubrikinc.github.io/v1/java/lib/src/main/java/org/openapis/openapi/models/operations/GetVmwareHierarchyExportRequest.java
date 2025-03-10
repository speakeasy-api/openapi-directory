/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetVmwareHierarchyExportRequest {
    /**
     * Get child objects of given root ID.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=root_id")
    public String rootId;

    public GetVmwareHierarchyExportRequest withRootId(String rootId) {
        this.rootId = rootId;
        return this;
    }
    
    public GetVmwareHierarchyExportRequest(){}
}
