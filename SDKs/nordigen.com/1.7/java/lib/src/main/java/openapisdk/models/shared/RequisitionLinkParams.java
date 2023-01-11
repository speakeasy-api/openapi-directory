package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * RequisitionLinkParams
 * RequisitionLinkParamsSerializer.
**/
public class RequisitionLinkParams {
    @JsonProperty("aspsp_id")
@SpeakeasyMetadata("form:name=aspsp_id multipartForm:name=aspsp_id")
    public String aspspId;
    public RequisitionLinkParams withAspspId(String aspspId) {
        this.aspspId = aspspId;
        return this;
    }
}