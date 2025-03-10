/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteTableRowRequest - Deletes a row from a table.
 */
public class DeleteTableRowRequest {
    /**
     * A location of a single table cell within a table.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellLocation")
    public TableCellLocation cellLocation;

    public DeleteTableRowRequest withCellLocation(TableCellLocation cellLocation) {
        this.cellLocation = cellLocation;
        return this;
    }
    
    /**
     * The table to delete rows from.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableObjectId")
    public String tableObjectId;

    public DeleteTableRowRequest withTableObjectId(String tableObjectId) {
        this.tableObjectId = tableObjectId;
        return this;
    }
    
    public DeleteTableRowRequest(){}
}
