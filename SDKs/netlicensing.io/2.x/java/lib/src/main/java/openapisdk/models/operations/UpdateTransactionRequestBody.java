package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public UpdateTransactionRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=dateClosed")
    public OffsetDateTime dateClosed;
    public UpdateTransactionRequestBody withDateClosed(OffsetDateTime dateClosed) {
        this.dateClosed = dateClosed;
        return this;
    }
    @SpeakeasyMetadata("form:name=dateCreated")
    public OffsetDateTime dateCreated;
    public UpdateTransactionRequestBody withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public UpdateTransactionRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=paymentMethod")
    public String paymentMethod;
    public UpdateTransactionRequestBody withPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=source")
    public UpdateTransactionRequestBodySourceEnum source;
    public UpdateTransactionRequestBody withSource(UpdateTransactionRequestBodySourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("form:name=status")
    public UpdateTransactionRequestBodyStatusEnum status;
    public UpdateTransactionRequestBody withStatus(UpdateTransactionRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}