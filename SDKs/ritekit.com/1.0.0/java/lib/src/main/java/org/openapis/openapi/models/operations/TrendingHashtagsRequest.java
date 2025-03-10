/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TrendingHashtagsRequest {
    /**
     * Restrict results only to green hashtags. Hides overused (red) hashtags.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=green")
    public Boolean green;

    public TrendingHashtagsRequest withGreen(Boolean green) {
        this.green = green;
        return this;
    }
    
    /**
     * Restrict results only to hashtags with latin characters
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latin")
    public Boolean latin;

    public TrendingHashtagsRequest withLatin(Boolean latin) {
        this.latin = latin;
        return this;
    }
    
    public TrendingHashtagsRequest(){}
}
