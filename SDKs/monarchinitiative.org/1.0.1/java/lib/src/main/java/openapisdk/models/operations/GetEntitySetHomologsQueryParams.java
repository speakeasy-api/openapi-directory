package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitySetHomologsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public GetEntitySetHomologsQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
}