/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETQtlListByPositionUsingGETRequest {
    /**
     * Chromosome
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chr")
    public String chr;

    public GETQtlListByPositionUsingGETRequest withChr(String chr) {
        this.chr = chr;
        return this;
    }
    
    /**
     * A list of assembly map keys can be found using the lookup service
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mapKey")
    public Integer mapKey;

    public GETQtlListByPositionUsingGETRequest withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
    
    /**
     * Start Position
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=start")
    public Long start;

    public GETQtlListByPositionUsingGETRequest withStart(Long start) {
        this.start = start;
        return this;
    }
    
    /**
     * Stop Position
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop")
    public Long stop;

    public GETQtlListByPositionUsingGETRequest withStop(Long stop) {
        this.stop = stop;
        return this;
    }
    
    public GETQtlListByPositionUsingGETRequest(@JsonProperty("chr") String chr, @JsonProperty("mapKey") Integer mapKey, @JsonProperty("start") Long start, @JsonProperty("stop") Long stop) {
        this.chr = chr;
        this.mapKey = mapKey;
        this.start = start;
        this.stop = stop;
  }
}
