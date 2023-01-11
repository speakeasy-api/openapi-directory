package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StructureResponseManyResponseMeta
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 * 
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
public class StructureResponseManyResponseMeta {
    @JsonProperty("api_version")
    public String apiVersion;
    public StructureResponseManyResponseMeta withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_available")
    public Long dataAvailable;
    public StructureResponseManyResponseMeta withDataAvailable(Long dataAvailable) {
        this.dataAvailable = dataAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_returned")
    public Long dataReturned;
    public StructureResponseManyResponseMeta withDataReturned(Long dataReturned) {
        this.dataReturned = dataReturned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("implementation")
    public StructureResponseManyResponseMetaImplementation implementation;
    public StructureResponseManyResponseMeta withImplementation(StructureResponseManyResponseMetaImplementation implementation) {
        this.implementation = implementation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_id")
    public String lastId;
    public StructureResponseManyResponseMeta withLastId(String lastId) {
        this.lastId = lastId;
        return this;
    }
    @JsonProperty("more_data_available")
    public Boolean moreDataAvailable;
    public StructureResponseManyResponseMeta withMoreDataAvailable(Boolean moreDataAvailable) {
        this.moreDataAvailable = moreDataAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public StructureResponseManyResponseMetaProvider provider;
    public StructureResponseManyResponseMeta withProvider(StructureResponseManyResponseMetaProvider provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("query")
    public StructureResponseManyResponseMetaResponseMetaQuery query;
    public StructureResponseManyResponseMeta withQuery(StructureResponseManyResponseMetaResponseMetaQuery query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_message")
    public String responseMessage;
    public StructureResponseManyResponseMeta withResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public Object schema;
    public StructureResponseManyResponseMeta withSchema(Object schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("time_stamp")
    public OffsetDateTime timeStamp;
    public StructureResponseManyResponseMeta withTimeStamp(OffsetDateTime timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Warnings[] warnings;
    public StructureResponseManyResponseMeta withWarnings(Warnings[] warnings) {
        this.warnings = warnings;
        return this;
    }
}