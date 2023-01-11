package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public TasksTasksListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public TasksTasksListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public TasksTasksListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public TasksTasksListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completedMax")
    public String completedMax;
    public TasksTasksListQueryParams withCompletedMax(String completedMax) {
        this.completedMax = completedMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completedMin")
    public String completedMin;
    public TasksTasksListQueryParams withCompletedMin(String completedMin) {
        this.completedMin = completedMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dueMax")
    public String dueMax;
    public TasksTasksListQueryParams withDueMax(String dueMax) {
        this.dueMax = dueMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dueMin")
    public String dueMin;
    public TasksTasksListQueryParams withDueMin(String dueMin) {
        this.dueMin = dueMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public TasksTasksListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public TasksTasksListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public TasksTasksListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public TasksTasksListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public TasksTasksListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public TasksTasksListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public TasksTasksListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showCompleted")
    public Boolean showCompleted;
    public TasksTasksListQueryParams withShowCompleted(Boolean showCompleted) {
        this.showCompleted = showCompleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showDeleted")
    public Boolean showDeleted;
    public TasksTasksListQueryParams withShowDeleted(Boolean showDeleted) {
        this.showDeleted = showDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showHidden")
    public Boolean showHidden;
    public TasksTasksListQueryParams withShowHidden(Boolean showHidden) {
        this.showHidden = showHidden;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedMin")
    public String updatedMin;
    public TasksTasksListQueryParams withUpdatedMin(String updatedMin) {
        this.updatedMin = updatedMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public TasksTasksListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public TasksTasksListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}