package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DownloadSizeEvidence
 * Total download size and URL-level download size breakdown for resources in a creative.
**/
public class DownloadSizeEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topUrlDownloadSizeBreakdowns")
    public UrlDownloadSize[] topUrlDownloadSizeBreakdowns;
    public DownloadSizeEvidence withTopUrlDownloadSizeBreakdowns(UrlDownloadSize[] topUrlDownloadSizeBreakdowns) {
        this.topUrlDownloadSizeBreakdowns = topUrlDownloadSizeBreakdowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDownloadSizeKb")
    public Integer totalDownloadSizeKb;
    public DownloadSizeEvidence withTotalDownloadSizeKb(Integer totalDownloadSizeKb) {
        this.totalDownloadSizeKb = totalDownloadSizeKb;
        return this;
    }
}