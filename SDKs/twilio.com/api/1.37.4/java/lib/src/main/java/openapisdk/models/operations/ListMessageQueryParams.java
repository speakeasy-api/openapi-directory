package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateSent")
    public OffsetDateTime dateSent;
    public ListMessageQueryParams withDateSent(OffsetDateTime dateSent) {
        this.dateSent = dateSent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateSent<")
    public OffsetDateTime dateSentLessThan;
    public ListMessageQueryParams withDateSentLessThan(OffsetDateTime dateSentLessThan) {
        this.dateSentLessThan = dateSentLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateSent>")
    public OffsetDateTime dateSentGreaterThan;
    public ListMessageQueryParams withDateSentGreaterThan(OffsetDateTime dateSentGreaterThan) {
        this.dateSentGreaterThan = dateSentGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=From")
    public String from;
    public ListMessageQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMessageQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=To")
    public String to;
    public ListMessageQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}