package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest {
    public ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesPathParams pathParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest withPathParams(ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesQueryParams queryParams;
    public ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest withQueryParams(ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PublishXunitXmlFilesRequest request;
    public ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest withRequest(openapisdk.models.shared.PublishXunitXmlFilesRequest request) {
        this.request = request;
        return this;
    }
    public ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity security;
    public ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest withSecurity(ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity security) {
        this.security = security;
        return this;
    }
}