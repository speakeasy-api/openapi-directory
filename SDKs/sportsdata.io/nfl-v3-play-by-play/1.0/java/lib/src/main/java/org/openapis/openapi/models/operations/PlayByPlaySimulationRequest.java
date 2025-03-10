/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PlayByPlaySimulationRequest {
    /**
     * Desired response format. Valid entries are &lt;code&gt;XML&lt;/code&gt; or &lt;code&gt;JSON&lt;/code&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayByPlaySimulationFormatEnum format;

    public PlayByPlaySimulationRequest withFormat(PlayByPlaySimulationFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * The number of plays to progress in this NFL live game simulation. Example entries are &lt;code&gt;0&lt;/code&gt;, &lt;code&gt;1&lt;/code&gt;, &lt;code&gt;2&lt;/code&gt;, &lt;code&gt;3&lt;/code&gt;, &lt;code&gt;150&lt;/code&gt;, &lt;code&gt;200&lt;/code&gt;, etc.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberofplays")
    public String numberofplays;

    public PlayByPlaySimulationRequest withNumberofplays(String numberofplays) {
        this.numberofplays = numberofplays;
        return this;
    }
    
    public PlayByPlaySimulationRequest(@JsonProperty("format") PlayByPlaySimulationFormatEnum format, @JsonProperty("numberofplays") String numberofplays) {
        this.format = format;
        this.numberofplays = numberofplays;
  }
}
