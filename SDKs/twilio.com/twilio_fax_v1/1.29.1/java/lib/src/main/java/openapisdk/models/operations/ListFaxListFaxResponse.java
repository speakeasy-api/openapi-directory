package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFaxListFaxResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faxes")
    public openapisdk.models.shared.FaxV1Fax[] faxes;
    public ListFaxListFaxResponse withFaxes(openapisdk.models.shared.FaxV1Fax[] faxes) {
        this.faxes = faxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFaxListFaxResponseMeta meta;
    public ListFaxListFaxResponse withMeta(ListFaxListFaxResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}