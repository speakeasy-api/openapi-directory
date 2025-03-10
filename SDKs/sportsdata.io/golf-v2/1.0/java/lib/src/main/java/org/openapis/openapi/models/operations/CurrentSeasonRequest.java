/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CurrentSeasonRequest {
    /**
     * Desired response format. Valid entries are &lt;code&gt;XML&lt;/code&gt; or &lt;code&gt;JSON&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CurrentSeasonFormatEnum format;

    public CurrentSeasonRequest withFormat(CurrentSeasonFormatEnum format) {
        this.format = format;
        return this;
    }
    
    public CurrentSeasonRequest(@JsonProperty("format") CurrentSeasonFormatEnum format) {
        this.format = format;
  }
}
