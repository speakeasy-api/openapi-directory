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
 * ObWriteFile2DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
public class ObWriteFile2DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlSum")
    public Double controlSum;
    public ObWriteFile2DataInitiation withControlSum(Double controlSum) {
        this.controlSum = controlSum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteFile2DataInitiationDebtorAccount debtorAccount;
    public ObWriteFile2DataInitiation withDebtorAccount(ObWriteFile2DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonProperty("FileHash")
    public String fileHash;
    public ObWriteFile2DataInitiation withFileHash(String fileHash) {
        this.fileHash = fileHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileReference")
    public String fileReference;
    public ObWriteFile2DataInitiation withFileReference(String fileReference) {
        this.fileReference = fileReference;
        return this;
    }
    @JsonProperty("FileType")
    public String fileType;
    public ObWriteFile2DataInitiation withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteFile2DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfTransactions")
    public String numberOfTransactions;
    public ObWriteFile2DataInitiation withNumberOfTransactions(String numberOfTransactions) {
        this.numberOfTransactions = numberOfTransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteFile2DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteFile2DataInitiation withRemittanceInformation(ObWriteFile2DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteFile2DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteFile2DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}