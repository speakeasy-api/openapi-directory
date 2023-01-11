package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEndUserTypeListEndUserTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_user_types")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUserType[] endUserTypes;
    public ListEndUserTypeListEndUserTypeResponse withEndUserTypes(openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUserType[] endUserTypes) {
        this.endUserTypes = endUserTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEndUserTypeListEndUserTypeResponseMeta meta;
    public ListEndUserTypeListEndUserTypeResponse withMeta(ListEndUserTypeListEndUserTypeResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}