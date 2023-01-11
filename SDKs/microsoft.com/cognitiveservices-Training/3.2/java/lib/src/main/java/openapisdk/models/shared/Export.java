package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Export {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUri")
    public String downloadUri;
    public Export withDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flavor")
    public ExportFlavorEnum flavor;
    public Export withFlavor(ExportFlavorEnum flavor) {
        this.flavor = flavor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newerVersionAvailable")
    public Boolean newerVersionAvailable;
    public Export withNewerVersionAvailable(Boolean newerVersionAvailable) {
        this.newerVersionAvailable = newerVersionAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public ExportPlatformEnum platform;
    public Export withPlatform(ExportPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ExportStatusEnum status;
    public Export withStatus(ExportStatusEnum status) {
        this.status = status;
        return this;
    }
}