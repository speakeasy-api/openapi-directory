package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkTokenCreateRequestIncomeVerification
 * Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
**/
public class LinkTokenCreateRequestIncomeVerification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_report_id")
    public String assetReportId;
    public LinkTokenCreateRequestIncomeVerification withAssetReportId(String assetReportId) {
        this.assetReportId = assetReportId;
        return this;
    }
    @JsonProperty("income_verification_id")
    public String incomeVerificationId;
    public LinkTokenCreateRequestIncomeVerification withIncomeVerificationId(String incomeVerificationId) {
        this.incomeVerificationId = incomeVerificationId;
        return this;
    }
}