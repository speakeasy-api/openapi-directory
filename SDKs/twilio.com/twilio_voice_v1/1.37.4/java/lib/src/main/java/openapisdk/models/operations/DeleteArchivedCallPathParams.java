package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArchivedCallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Date")
    public LocalDate date;
    public DeleteArchivedCallPathParams withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteArchivedCallPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}