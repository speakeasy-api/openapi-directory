package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Asr
 * ASR
**/
public class Asr {
    @JsonProperty("account_id")
    public String accountId;
    public Asr withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public Asr withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public Asr withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public Asr withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public DirectionEnum direction;
    public Asr withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public Asr withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_subaccounts")
    public Boolean includeSubaccounts;
    public Asr withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @JsonProperty("product")
    public ProductAsrEnum product;
    public Asr withProduct(ProductAsrEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AsrStatusEnum status;
    public Asr withStatus(AsrStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public Asr withTo(String to) {
        this.to = to;
        return this;
    }
}