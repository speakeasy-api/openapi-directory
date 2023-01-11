package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entityId")
    public String entityId;
    public ListUsersQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListUsersQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public ListUsersQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListUsersQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.UserStatusEnum status;
    public ListUsersQueryParams withStatus(openapisdk.models.shared.UserStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.UserTypeEnum type;
    public ListUsersQueryParams withType(openapisdk.models.shared.UserTypeEnum type) {
        this.type = type;
        return this;
    }
}