package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RawDocumentData
 * A document to send, in base64 encoded format.
**/
public class RawDocumentData {
    @JsonProperty("document")
    public String document;
    public RawDocumentData withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentTypeId")
    public String documentTypeId;
    public RawDocumentData withDocumentTypeId(String documentTypeId) {
        this.documentTypeId = documentTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parse")
    public Boolean parse;
    public RawDocumentData withParse(Boolean parse) {
        this.parse = parse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parseStrategy")
    public RawDocumentDataParseStrategyEnum parseStrategy;
    public RawDocumentData withParseStrategy(RawDocumentDataParseStrategyEnum parseStrategy) {
        this.parseStrategy = parseStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public RawDocumentData withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
}