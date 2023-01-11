package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlInspectionResult
 * URL inspection result, including all inspection results.
**/
public class UrlInspectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ampResult")
    public AmpInspectionResult ampResult;
    public UrlInspectionResult withAmpResult(AmpInspectionResult ampResult) {
        this.ampResult = ampResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexStatusResult")
    public IndexStatusInspectionResult indexStatusResult;
    public UrlInspectionResult withIndexStatusResult(IndexStatusInspectionResult indexStatusResult) {
        this.indexStatusResult = indexStatusResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectionResultLink")
    public String inspectionResultLink;
    public UrlInspectionResult withInspectionResultLink(String inspectionResultLink) {
        this.inspectionResultLink = inspectionResultLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileUsabilityResult")
    public MobileUsabilityInspectionResult mobileUsabilityResult;
    public UrlInspectionResult withMobileUsabilityResult(MobileUsabilityInspectionResult mobileUsabilityResult) {
        this.mobileUsabilityResult = mobileUsabilityResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("richResultsResult")
    public RichResultsInspectionResult richResultsResult;
    public UrlInspectionResult withRichResultsResult(RichResultsInspectionResult richResultsResult) {
        this.richResultsResult = richResultsResult;
        return this;
    }
}