package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandQueryCreateUnderstandQueryRequest {
    @SpeakeasyMetadata("form:name=Field")
    public String field;
    public CreateUnderstandQueryCreateUnderstandQueryRequest withField(String field) {
        this.field = field;
        return this;
    }
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public CreateUnderstandQueryCreateUnderstandQueryRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=ModelBuild")
    public String modelBuild;
    public CreateUnderstandQueryCreateUnderstandQueryRequest withModelBuild(String modelBuild) {
        this.modelBuild = modelBuild;
        return this;
    }
    @SpeakeasyMetadata("form:name=Query")
    public String query;
    public CreateUnderstandQueryCreateUnderstandQueryRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("form:name=Tasks")
    public String tasks;
    public CreateUnderstandQueryCreateUnderstandQueryRequest withTasks(String tasks) {
        this.tasks = tasks;
        return this;
    }
}