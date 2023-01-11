package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsertSalesActivityRequestBody {
    @SpeakeasyMetadata("multipartForm:name=subject")
    public String subject;
    public InsertSalesActivityRequestBody withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timestamp")
    public Long timestamp;
    public InsertSalesActivityRequestBody withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public InsertSalesActivityRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}