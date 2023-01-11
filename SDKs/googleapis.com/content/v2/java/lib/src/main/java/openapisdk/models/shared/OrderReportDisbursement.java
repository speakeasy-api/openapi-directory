package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderReportDisbursement
 * Order disbursement. All methods require the payment analyst role.
**/
public class OrderReportDisbursement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementAmount")
    public Price disbursementAmount;
    public OrderReportDisbursement withDisbursementAmount(Price disbursementAmount) {
        this.disbursementAmount = disbursementAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementCreationDate")
    public String disbursementCreationDate;
    public OrderReportDisbursement withDisbursementCreationDate(String disbursementCreationDate) {
        this.disbursementCreationDate = disbursementCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementDate")
    public String disbursementDate;
    public OrderReportDisbursement withDisbursementDate(String disbursementDate) {
        this.disbursementDate = disbursementDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursementId")
    public String disbursementId;
    public OrderReportDisbursement withDisbursementId(String disbursementId) {
        this.disbursementId = disbursementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public OrderReportDisbursement withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
}