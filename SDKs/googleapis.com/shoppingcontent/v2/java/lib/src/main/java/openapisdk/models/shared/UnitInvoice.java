package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnitInvoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalCharges")
    public UnitInvoiceAdditionalCharge[] additionalCharges;
    public UnitInvoice withAdditionalCharges(UnitInvoiceAdditionalCharge[] additionalCharges) {
        this.additionalCharges = additionalCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotions")
    public Promotion[] promotions;
    public UnitInvoice withPromotions(Promotion[] promotions) {
        this.promotions = promotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPricePretax")
    public Price unitPricePretax;
    public UnitInvoice withUnitPricePretax(Price unitPricePretax) {
        this.unitPricePretax = unitPricePretax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPriceTaxes")
    public UnitInvoiceTaxLine[] unitPriceTaxes;
    public UnitInvoice withUnitPriceTaxes(UnitInvoiceTaxLine[] unitPriceTaxes) {
        this.unitPriceTaxes = unitPriceTaxes;
        return this;
    }
}