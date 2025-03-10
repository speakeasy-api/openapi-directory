/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GistsListRequest {
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public GistsListRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * The number of results per page (max 100).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public GistsListRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public OffsetDateTime since;

    public GistsListRequest withSince(OffsetDateTime since) {
        this.since = since;
        return this;
    }
    
    public GistsListRequest(){}
}
