package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Language")
    public String language;
    public ListUnderstandQueryQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ModelBuild")
    public String modelBuild;
    public ListUnderstandQueryQueryParams withModelBuild(String modelBuild) {
        this.modelBuild = modelBuild;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUnderstandQueryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public String status;
    public ListUnderstandQueryQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}