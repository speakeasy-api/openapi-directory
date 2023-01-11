package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChallengeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FactorSid")
    public String factorSid;
    public ListChallengeQueryParams withFactorSid(String factorSid) {
        this.factorSid = factorSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.ChallengeEnumListOrdersEnum order;
    public ListChallengeQueryParams withOrder(openapisdk.models.shared.ChallengeEnumListOrdersEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListChallengeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.ChallengeEnumChallengeStatusesEnum status;
    public ListChallengeQueryParams withStatus(openapisdk.models.shared.ChallengeEnumChallengeStatusesEnum status) {
        this.status = status;
        return this;
    }
}