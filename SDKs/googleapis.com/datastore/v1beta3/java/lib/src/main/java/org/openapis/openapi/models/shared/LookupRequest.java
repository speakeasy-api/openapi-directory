/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LookupRequest - The request for Datastore.Lookup.
 */
public class LookupRequest {
    /**
     * Required. Keys of entities to look up.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public Key[] keys;

    public LookupRequest withKeys(Key[] keys) {
        this.keys = keys;
        return this;
    }
    
    /**
     * The options shared by read requests.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOptions")
    public ReadOptions readOptions;

    public LookupRequest withReadOptions(ReadOptions readOptions) {
        this.readOptions = readOptions;
        return this;
    }
    
    public LookupRequest(){}
}
