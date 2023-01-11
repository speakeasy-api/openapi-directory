package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHostedNumbersAuthorizationDocumentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Email")
    public String email;
    public ListHostedNumbersAuthorizationDocumentQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListHostedNumbersAuthorizationDocumentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.AuthorizationDocumentEnumStatusEnum status;
    public ListHostedNumbersAuthorizationDocumentQueryParams withStatus(openapisdk.models.shared.AuthorizationDocumentEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}