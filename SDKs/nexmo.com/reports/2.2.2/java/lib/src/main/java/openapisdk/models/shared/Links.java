package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_report")
    public LinksDownloadReport downloadReport;
    public Links withDownloadReport(LinksDownloadReport downloadReport) {
        this.downloadReport = downloadReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksSelf self;
    public Links withSelf(LinksSelf self) {
        this.self = self;
        return this;
    }
}