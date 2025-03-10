/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListSchemaVersionRequest {
    /**
     * The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;

    public ListSchemaVersionRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The page index. This value is simply for client state.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Page")
    public Long page;

    public ListSchemaVersionRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;

    public ListSchemaVersionRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * The page token. This is provided by the API.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;

    public ListSchemaVersionRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    public ListSchemaVersionRequest(@JsonProperty("Id") String id) {
        this.id = id;
  }
}
