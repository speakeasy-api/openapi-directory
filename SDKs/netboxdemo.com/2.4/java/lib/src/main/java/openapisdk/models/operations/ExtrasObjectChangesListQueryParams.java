package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasObjectChangesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public String action;
    public ExtrasObjectChangesListQueryParams withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changed_object_type")
    public String changedObjectType;
    public ExtrasObjectChangesListQueryParams withChangedObjectType(String changedObjectType) {
        this.changedObjectType = changedObjectType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ExtrasObjectChangesListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_repr")
    public String objectRepr;
    public ExtrasObjectChangesListQueryParams withObjectRepr(String objectRepr) {
        this.objectRepr = objectRepr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ExtrasObjectChangesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public ExtrasObjectChangesListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_id")
    public String requestId;
    public ExtrasObjectChangesListQueryParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public String time;
    public ExtrasObjectChangesListQueryParams withTime(String time) {
        this.time = time;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user")
    public String user;
    public ExtrasObjectChangesListQueryParams withUser(String user) {
        this.user = user;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_name")
    public String userName;
    public ExtrasObjectChangesListQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}