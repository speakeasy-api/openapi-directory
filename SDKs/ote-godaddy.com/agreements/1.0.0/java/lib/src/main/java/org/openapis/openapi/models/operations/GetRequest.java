/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetRequest {
    /**
     * Unique identifier of the Market used to retrieve/translate Legal Agreements
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Market-Id")
    public String xMarketId;

    public GetRequest withXMarketId(String xMarketId) {
        this.xMarketId = xMarketId;
        return this;
    }
    
    /**
     * PrivateLabelId to operate as, if different from JWT
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Private-Label-Id")
    public Long xPrivateLabelId;

    public GetRequest withXPrivateLabelId(Long xPrivateLabelId) {
        this.xPrivateLabelId = xPrivateLabelId;
        return this;
    }
    
    /**
     * Keys for Agreements whose details are to be retrieved
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=keys")
    public String[] keys;

    public GetRequest withKeys(String[] keys) {
        this.keys = keys;
        return this;
    }
    
    public GetRequest(@JsonProperty("keys") String[] keys) {
        this.keys = keys;
  }
}
