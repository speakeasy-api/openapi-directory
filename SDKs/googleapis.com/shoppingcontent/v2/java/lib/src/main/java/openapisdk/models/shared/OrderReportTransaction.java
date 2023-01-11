package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderReportTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementAmount")
    public Price disbursementAmount;
    public OrderReportTransaction withDisbursementAmount(Price disbursementAmount) {
        this.disbursementAmount = disbursementAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementCreationDate")
    public String disbursementCreationDate;
    public OrderReportTransaction withDisbursementCreationDate(String disbursementCreationDate) {
        this.disbursementCreationDate = disbursementCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementDate")
    public String disbursementDate;
    public OrderReportTransaction withDisbursementDate(String disbursementDate) {
        this.disbursementDate = disbursementDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementId")
    public String disbursementId;
    public OrderReportTransaction withDisbursementId(String disbursementId) {
        this.disbursementId = disbursementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public OrderReportTransaction withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public OrderReportTransaction withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public OrderReportTransaction withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productAmount")
    public Amount productAmount;
    public OrderReportTransaction withProductAmount(Amount productAmount) {
        this.productAmount = productAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productAmountWithRemittedTax")
    public ProductAmount productAmountWithRemittedTax;
    public OrderReportTransaction withProductAmountWithRemittedTax(ProductAmount productAmountWithRemittedTax) {
        this.productAmountWithRemittedTax = productAmountWithRemittedTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public String transactionDate;
    public OrderReportTransaction withTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
}