package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateTransactionRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public CreateTransactionRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=dateClosed")
    public OffsetDateTime dateClosed;
    public CreateTransactionRequestBody withDateClosed(OffsetDateTime dateClosed) {
        this.dateClosed = dateClosed;
        return this;
    }
    @SpeakeasyMetadata("form:name=dateCreated")
    public OffsetDateTime dateCreated;
    public CreateTransactionRequestBody withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseeNumber")
    public String licenseeNumber;
    public CreateTransactionRequestBody withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public CreateTransactionRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=paymentMethod")
    public String paymentMethod;
    public CreateTransactionRequestBody withPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=source")
    public CreateTransactionRequestBodySourceEnum source;
    public CreateTransactionRequestBody withSource(CreateTransactionRequestBodySourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("form:name=status")
    public CreateTransactionRequestBodyStatusEnum status;
    public CreateTransactionRequestBody withStatus(CreateTransactionRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}