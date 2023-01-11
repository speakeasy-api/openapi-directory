package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncomeVerificationDocumentsDownloadRequest
 * IncomeVerificationDocumentsDownloadRequest defines the request schema for `/income/verification/documents/download`.
**/
public class IncomeVerificationDocumentsDownloadRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public IncomeVerificationDocumentsDownloadRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("income_verification_id")
    public String incomeVerificationId;
    public IncomeVerificationDocumentsDownloadRequest withIncomeVerificationId(String incomeVerificationId) {
        this.incomeVerificationId = incomeVerificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public IncomeVerificationDocumentsDownloadRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}