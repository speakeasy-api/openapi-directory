package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitySetFunctionSlimmerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_automatic_assertions")
    public Boolean excludeAutomaticAssertions;
    public GetEntitySetFunctionSlimmerQueryParams withExcludeAutomaticAssertions(Boolean excludeAutomaticAssertions) {
        this.excludeAutomaticAssertions = excludeAutomaticAssertions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relationship_type")
    public GetEntitySetFunctionSlimmerRelationshipTypeEnum relationshipType;
    public GetEntitySetFunctionSlimmerQueryParams withRelationshipType(GetEntitySetFunctionSlimmerRelationshipTypeEnum relationshipType) {
        this.relationshipType = relationshipType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetEntitySetFunctionSlimmerQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetEntitySetFunctionSlimmerQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetEntitySetFunctionSlimmerQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public GetEntitySetFunctionSlimmerQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
}