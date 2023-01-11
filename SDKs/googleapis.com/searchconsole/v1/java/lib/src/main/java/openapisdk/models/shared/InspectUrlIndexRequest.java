package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InspectUrlIndexRequest
 * Index inspection request.
**/
public class InspectUrlIndexRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectionUrl")
    public String inspectionUrl;
    public InspectUrlIndexRequest withInspectionUrl(String inspectionUrl) {
        this.inspectionUrl = inspectionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public InspectUrlIndexRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteUrl")
    public String siteUrl;
    public InspectUrlIndexRequest withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}