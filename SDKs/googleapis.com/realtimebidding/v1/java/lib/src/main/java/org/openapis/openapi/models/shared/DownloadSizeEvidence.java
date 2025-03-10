/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DownloadSizeEvidence - Total download size and URL-level download size breakdown for resources in a creative.
 */
public class DownloadSizeEvidence {
    /**
     * Download size broken down by URLs with the top download size.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topUrlDownloadSizeBreakdowns")
    public UrlDownloadSize[] topUrlDownloadSizeBreakdowns;

    public DownloadSizeEvidence withTopUrlDownloadSizeBreakdowns(UrlDownloadSize[] topUrlDownloadSizeBreakdowns) {
        this.topUrlDownloadSizeBreakdowns = topUrlDownloadSizeBreakdowns;
        return this;
    }
    
    /**
     * Total download size (in kilobytes) for all the resources in the creative.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDownloadSizeKb")
    public Integer totalDownloadSizeKb;

    public DownloadSizeEvidence withTotalDownloadSizeKb(Integer totalDownloadSizeKb) {
        this.totalDownloadSizeKb = totalDownloadSizeKb;
        return this;
    }
    
    public DownloadSizeEvidence(){}
}
