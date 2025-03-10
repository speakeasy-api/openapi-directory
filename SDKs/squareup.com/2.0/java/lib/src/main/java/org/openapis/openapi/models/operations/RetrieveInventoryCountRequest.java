/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class RetrieveInventoryCountRequest {
    /**
     * ID of the [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) to retrieve.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=catalog_object_id")
    public String catalogObjectId;

    public RetrieveInventoryCountRequest withCatalogObjectId(String catalogObjectId) {
        this.catalogObjectId = catalogObjectId;
        return this;
    }
    
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * 
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;

    public RetrieveInventoryCountRequest withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    
    /**
     * The [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) IDs to look up as a comma-separated
     * list. An empty list queries all locations.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location_ids")
    public String locationIds;

    public RetrieveInventoryCountRequest withLocationIds(String locationIds) {
        this.locationIds = locationIds;
        return this;
    }
    
    public RetrieveInventoryCountRequest(@JsonProperty("catalog_object_id") String catalogObjectId) {
        this.catalogObjectId = catalogObjectId;
  }
}
