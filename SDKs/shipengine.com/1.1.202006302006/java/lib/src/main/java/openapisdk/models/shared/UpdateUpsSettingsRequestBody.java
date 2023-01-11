package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUpsSettingsRequestBody
 * UPS account settings
**/
public class UpdateUpsSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_postal_code")
    public String accountPostalCode;
    public UpdateUpsSettingsRequestBody withAccountPostalCode(String accountPostalCode) {
        this.accountPostalCode = accountPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public UpsInvoice invoice;
    public UpdateUpsSettingsRequestBody withInvoice(UpsInvoice invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_primary_account")
    public Boolean isPrimaryAccount;
    public UpdateUpsSettingsRequestBody withIsPrimaryAccount(Boolean isPrimaryAccount) {
        this.isPrimaryAccount = isPrimaryAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mail_innovations_cost_center")
    public String mailInnovationsCostCenter;
    public UpdateUpsSettingsRequestBody withMailInnovationsCostCenter(String mailInnovationsCostCenter) {
        this.mailInnovationsCostCenter = mailInnovationsCostCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mail_innovations_endorsement")
    public AncillaryServiceEndorsementEnum mailInnovationsEndorsement;
    public UpdateUpsSettingsRequestBody withMailInnovationsEndorsement(AncillaryServiceEndorsementEnum mailInnovationsEndorsement) {
        this.mailInnovationsEndorsement = mailInnovationsEndorsement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public UpdateUpsSettingsRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_type")
    public UpsPickupTypeEnum pickupType;
    public UpdateUpsSettingsRequestBody withPickupType(UpsPickupTypeEnum pickupType) {
        this.pickupType = pickupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_carbon_neutral_shipping_program")
    public Boolean useCarbonNeutralShippingProgram;
    public UpdateUpsSettingsRequestBody withUseCarbonNeutralShippingProgram(Boolean useCarbonNeutralShippingProgram) {
        this.useCarbonNeutralShippingProgram = useCarbonNeutralShippingProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_consolidation_services")
    public Boolean useConsolidationServices;
    public UpdateUpsSettingsRequestBody withUseConsolidationServices(Boolean useConsolidationServices) {
        this.useConsolidationServices = useConsolidationServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_ground_freight_pricing")
    public Boolean useGroundFreightPricing;
    public UpdateUpsSettingsRequestBody withUseGroundFreightPricing(Boolean useGroundFreightPricing) {
        this.useGroundFreightPricing = useGroundFreightPricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_negotiated_rates")
    public Boolean useNegotiatedRates;
    public UpdateUpsSettingsRequestBody withUseNegotiatedRates(Boolean useNegotiatedRates) {
        this.useNegotiatedRates = useNegotiatedRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_order_number_on_mail_innovations_labels")
    public Boolean useOrderNumberOnMailInnovationsLabels;
    public UpdateUpsSettingsRequestBody withUseOrderNumberOnMailInnovationsLabels(Boolean useOrderNumberOnMailInnovationsLabels) {
        this.useOrderNumberOnMailInnovationsLabels = useOrderNumberOnMailInnovationsLabels;
        return this;
    }
}