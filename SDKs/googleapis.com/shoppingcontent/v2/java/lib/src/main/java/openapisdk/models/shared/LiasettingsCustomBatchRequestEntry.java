package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiasettingsCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public LiasettingsCustomBatchRequestEntry withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public LiasettingsCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactEmail")
    public String contactEmail;
    public LiasettingsCustomBatchRequestEntry withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactName")
    public String contactName;
    public LiasettingsCustomBatchRequestEntry withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public LiasettingsCustomBatchRequestEntry withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmbEmail")
    public String gmbEmail;
    public LiasettingsCustomBatchRequestEntry withGmbEmail(String gmbEmail) {
        this.gmbEmail = gmbEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liaSettings")
    public LiaSettings liaSettings;
    public LiasettingsCustomBatchRequestEntry withLiaSettings(LiaSettings liaSettings) {
        this.liaSettings = liaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public LiasettingsCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public LiasettingsCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posDataProviderId")
    public String posDataProviderId;
    public LiasettingsCustomBatchRequestEntry withPosDataProviderId(String posDataProviderId) {
        this.posDataProviderId = posDataProviderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posExternalAccountId")
    public String posExternalAccountId;
    public LiasettingsCustomBatchRequestEntry withPosExternalAccountId(String posExternalAccountId) {
        this.posExternalAccountId = posExternalAccountId;
        return this;
    }
}