/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ExportEventsJSONLRequest {
    /**
     * an optional list of fields to export, comma-separated
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public ExportEventsJSONLRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * an optional search string for filtering results
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;

    public ExportEventsJSONLRequest withSearch(String search) {
        this.search = search;
        return this;
    }
    
    public ExportEventsJSONLRequest(){}
}
