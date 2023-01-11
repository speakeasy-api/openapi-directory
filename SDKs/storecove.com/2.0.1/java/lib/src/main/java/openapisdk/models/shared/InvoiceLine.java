package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvoiceLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingCost")
    public String accountingCost;
    public InvoiceLine withAccountingCost(String accountingCost) {
        this.accountingCost = accountingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalItemProperties")
    public AdditionalItemProperty[] additionalItemProperties;
    public InvoiceLine withAdditionalItemProperties(AdditionalItemProperty[] additionalItemProperties) {
        this.additionalItemProperties = additionalItemProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowanceCharge")
    public Double allowanceCharge;
    public InvoiceLine withAllowanceCharge(Double allowanceCharge) {
        this.allowanceCharge = allowanceCharge;
        return this;
    }
    @JsonProperty("amountExcludingVat")
    public Double amountExcludingVat;
    public InvoiceLine withAmountExcludingVat(Double amountExcludingVat) {
        this.amountExcludingVat = amountExcludingVat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyersItemIdentification")
    public String buyersItemIdentification;
    public InvoiceLine withBuyersItemIdentification(String buyersItemIdentification) {
        this.buyersItemIdentification = buyersItemIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery")
    public Delivery delivery;
    public InvoiceLine withDelivery(Delivery delivery) {
        this.delivery = delivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InvoiceLine withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoicePeriod")
    public String invoicePeriod;
    public InvoiceLine withInvoicePeriod(String invoicePeriod) {
        this.invoicePeriod = invoicePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemPrice")
    public Double itemPrice;
    public InvoiceLine withItemPrice(Double itemPrice) {
        this.itemPrice = itemPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineId")
    public String lineId;
    public InvoiceLine withLineId(String lineId) {
        this.lineId = lineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InvoiceLine withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineReferenceLineId")
    public String orderLineReferenceLineId;
    public InvoiceLine withOrderLineReferenceLineId(String orderLineReferenceLineId) {
        this.orderLineReferenceLineId = orderLineReferenceLineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public InvoiceLine withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantityUnitCode")
    public InvoiceLineQuantityUnitCodeEnum quantityUnitCode;
    public InvoiceLine withQuantityUnitCode(InvoiceLineQuantityUnitCodeEnum quantityUnitCode) {
        this.quantityUnitCode = quantityUnitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellersItemIdentification")
    public String sellersItemIdentification;
    public InvoiceLine withSellersItemIdentification(String sellersItemIdentification) {
        this.sellersItemIdentification = sellersItemIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardItemIdentification")
    public String standardItemIdentification;
    public InvoiceLine withStandardItemIdentification(String standardItemIdentification) {
        this.standardItemIdentification = standardItemIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardItemIdentificationSchemeAgencyId")
    public String standardItemIdentificationSchemeAgencyId;
    public InvoiceLine withStandardItemIdentificationSchemeAgencyId(String standardItemIdentificationSchemeAgencyId) {
        this.standardItemIdentificationSchemeAgencyId = standardItemIdentificationSchemeAgencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardItemIdentificationSchemeId")
    public String standardItemIdentificationSchemeId;
    public InvoiceLine withStandardItemIdentificationSchemeId(String standardItemIdentificationSchemeId) {
        this.standardItemIdentificationSchemeId = standardItemIdentificationSchemeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Tax tax;
    public InvoiceLine withTax(Tax tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes_duties_fees")
    public Tax[] taxesDutiesFees;
    public InvoiceLine withTaxesDutiesFees(Tax[] taxesDutiesFees) {
        this.taxesDutiesFees = taxesDutiesFees;
        return this;
    }
}