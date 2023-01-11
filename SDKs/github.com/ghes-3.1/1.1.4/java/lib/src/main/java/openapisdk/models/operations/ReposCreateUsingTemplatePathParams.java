package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateUsingTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template_owner")
    public String templateOwner;
    public ReposCreateUsingTemplatePathParams withTemplateOwner(String templateOwner) {
        this.templateOwner = templateOwner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template_repo")
    public String templateRepo;
    public ReposCreateUsingTemplatePathParams withTemplateRepo(String templateRepo) {
        this.templateRepo = templateRepo;
        return this;
    }
}