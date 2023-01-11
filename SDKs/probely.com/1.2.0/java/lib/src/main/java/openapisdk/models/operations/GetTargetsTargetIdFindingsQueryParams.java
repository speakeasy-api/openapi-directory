package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdFindingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee")
    public String[] assignee;
    public GetTargetsTargetIdFindingsQueryParams withAssignee(String[] assignee) {
        this.assignee = assignee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label")
    public String[] label;
    public GetTargetsTargetIdFindingsQueryParams withLabel(String[] label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Long length;
    public GetTargetsTargetIdFindingsQueryParams withLength(Long length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GetTargetsTargetIdFindingsQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetTargetsTargetIdFindingsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scan")
    public String[] scan;
    public GetTargetsTargetIdFindingsQueryParams withScan(String[] scan) {
        this.scan = scan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetTargetsTargetIdFindingsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=severity")
    public openapisdk.models.shared.FindingSeverityEnum severity;
    public GetTargetsTargetIdFindingsQueryParams withSeverity(openapisdk.models.shared.FindingSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.FindingStateEnum state;
    public GetTargetsTargetIdFindingsQueryParams withState(openapisdk.models.shared.FindingStateEnum state) {
        this.state = state;
        return this;
    }
}