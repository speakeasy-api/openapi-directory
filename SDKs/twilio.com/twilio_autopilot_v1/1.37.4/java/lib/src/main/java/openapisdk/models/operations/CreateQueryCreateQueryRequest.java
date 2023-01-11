package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateQueryCreateQueryRequest {
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public CreateQueryCreateQueryRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=ModelBuild")
    public String modelBuild;
    public CreateQueryCreateQueryRequest withModelBuild(String modelBuild) {
        this.modelBuild = modelBuild;
        return this;
    }
    @SpeakeasyMetadata("form:name=Query")
    public String query;
    public CreateQueryCreateQueryRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("form:name=Tasks")
    public String tasks;
    public CreateQueryCreateQueryRequest withTasks(String tasks) {
        this.tasks = tasks;
        return this;
    }
}