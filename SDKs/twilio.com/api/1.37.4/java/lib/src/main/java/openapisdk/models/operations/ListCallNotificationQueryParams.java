package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListCallNotificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Log")
    public Long log;
    public ListCallNotificationQueryParams withLog(Long log) {
        this.log = log;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MessageDate")
    public LocalDate messageDate;
    public ListCallNotificationQueryParams withMessageDate(LocalDate messageDate) {
        this.messageDate = messageDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MessageDate<")
    public LocalDate messageDateLessThan;
    public ListCallNotificationQueryParams withMessageDateLessThan(LocalDate messageDateLessThan) {
        this.messageDateLessThan = messageDateLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MessageDate>")
    public LocalDate messageDateGreaterThan;
    public ListCallNotificationQueryParams withMessageDateGreaterThan(LocalDate messageDateGreaterThan) {
        this.messageDateGreaterThan = messageDateGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCallNotificationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}