package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=account_id")
    public String accountId;
    public GetRecordsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_end")
    public LocalDate dateEnd;
    public GetRecordsQueryParams withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_start")
    public LocalDate dateStart;
    public GetRecordsQueryParams withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetRecordsDirectionEnum direction;
    public GetRecordsQueryParams withDirection(GetRecordsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetRecordsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_message")
    public Boolean includeMessage;
    public GetRecordsQueryParams withIncludeMessage(Boolean includeMessage) {
        this.includeMessage = includeMessage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=product")
    public GetRecordsProductEnum product;
    public GetRecordsQueryParams withProduct(GetRecordsProductEnum product) {
        this.product = product;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_concatenated")
    public Boolean showConcatenated;
    public GetRecordsQueryParams withShowConcatenated(Boolean showConcatenated) {
        this.showConcatenated = showConcatenated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetRecordsStatusEnum status;
    public GetRecordsQueryParams withStatus(GetRecordsStatusEnum status) {
        this.status = status;
        return this;
    }
}