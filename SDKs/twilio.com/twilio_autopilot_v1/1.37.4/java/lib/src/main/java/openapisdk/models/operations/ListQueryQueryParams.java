package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DialogueSid")
    public String dialogueSid;
    public ListQueryQueryParams withDialogueSid(String dialogueSid) {
        this.dialogueSid = dialogueSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Language")
    public String language;
    public ListQueryQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ModelBuild")
    public String modelBuild;
    public ListQueryQueryParams withModelBuild(String modelBuild) {
        this.modelBuild = modelBuild;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListQueryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public String status;
    public ListQueryQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}