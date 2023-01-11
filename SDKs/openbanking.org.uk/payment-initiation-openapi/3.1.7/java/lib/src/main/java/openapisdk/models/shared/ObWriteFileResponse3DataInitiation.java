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
 * ObWriteFileResponse3DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
public class ObWriteFileResponse3DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlSum")
    public Double controlSum;
    public ObWriteFileResponse3DataInitiation withControlSum(Double controlSum) {
        this.controlSum = controlSum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteFileResponse3DataInitiationDebtorAccount debtorAccount;
    public ObWriteFileResponse3DataInitiation withDebtorAccount(ObWriteFileResponse3DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonProperty("FileHash")
    public String fileHash;
    public ObWriteFileResponse3DataInitiation withFileHash(String fileHash) {
        this.fileHash = fileHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileReference")
    public String fileReference;
    public ObWriteFileResponse3DataInitiation withFileReference(String fileReference) {
        this.fileReference = fileReference;
        return this;
    }
    @JsonProperty("FileType")
    public String fileType;
    public ObWriteFileResponse3DataInitiation withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteFileResponse3DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfTransactions")
    public String numberOfTransactions;
    public ObWriteFileResponse3DataInitiation withNumberOfTransactions(String numberOfTransactions) {
        this.numberOfTransactions = numberOfTransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteFileResponse3DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteFileResponse3DataInitiation withRemittanceInformation(ObWriteFileResponse3DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteFileResponse3DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteFileResponse3DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}