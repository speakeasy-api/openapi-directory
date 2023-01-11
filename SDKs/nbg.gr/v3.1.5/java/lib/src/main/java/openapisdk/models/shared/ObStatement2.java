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
 * ObStatement2
 * Provides further details on a statement resource.
**/
public class ObStatement2 {
    @JsonProperty("AccountId")
    public String accountId;
    public ObStatement2 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObStatement2 withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndDateTime")
    public OffsetDateTime endDateTime;
    public ObStatement2 withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartDateTime")
    public OffsetDateTime startDateTime;
    public ObStatement2 withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementId")
    public String statementId;
    public ObStatement2 withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementReference")
    public String statementReference;
    public ObStatement2 withStatementReference(String statementReference) {
        this.statementReference = statementReference;
        return this;
    }
    @JsonProperty("Type")
    public ObExternalStatementType1CodeEnum type;
    public ObStatement2 withType(ObExternalStatementType1CodeEnum type) {
        this.type = type;
        return this;
    }
}