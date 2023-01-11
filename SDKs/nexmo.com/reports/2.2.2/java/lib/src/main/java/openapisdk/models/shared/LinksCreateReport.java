package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinksCreateReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksCreateReportSelf self;
    public LinksCreateReport withSelf(LinksCreateReportSelf self) {
        this.self = self;
        return this;
    }
}