package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDpsMessageReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetDpsMessageReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FromDate")
    public LocalDate fromDate;
    public GetDpsMessageReportOutputQueryParams withFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetDpsMessageReportOutputQueryParams withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MessageStatuses")
    public String messageStatuses;
    public GetDpsMessageReportOutputQueryParams withMessageStatuses(String messageStatuses) {
        this.messageStatuses = messageStatuses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MessageTypes")
    public String messageTypes;
    public GetDpsMessageReportOutputQueryParams withMessageTypes(String messageTypes) {
        this.messageTypes = messageTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetDpsMessageReportOutputQueryParams withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ToDate")
    public LocalDate toDate;
    public GetDpsMessageReportOutputQueryParams withToDate(LocalDate toDate) {
        this.toDate = toDate;
        return this;
    }
}