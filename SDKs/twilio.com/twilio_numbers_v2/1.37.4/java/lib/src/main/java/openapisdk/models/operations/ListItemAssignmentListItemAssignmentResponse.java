package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListItemAssignmentListItemAssignmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListItemAssignmentListItemAssignmentResponseMeta meta;
    public ListItemAssignmentListItemAssignmentResponse withMeta(ListItemAssignmentListItemAssignmentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment[] results;
    public ListItemAssignmentListItemAssignmentResponse withResults(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment[] results) {
        this.results = results;
        return this;
    }
}