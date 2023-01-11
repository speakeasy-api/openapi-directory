package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitySetAnatomySlimmerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_automatic_assertions")
    public Boolean excludeAutomaticAssertions;
    public GetEntitySetAnatomySlimmerQueryParams withExcludeAutomaticAssertions(Boolean excludeAutomaticAssertions) {
        this.excludeAutomaticAssertions = excludeAutomaticAssertions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetEntitySetAnatomySlimmerQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetEntitySetAnatomySlimmerQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetEntitySetAnatomySlimmerQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public GetEntitySetAnatomySlimmerQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
}