/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * V1Payment - A payment represents a paid transaction between a Square merchant and a
 * customer. Payment details are usually available from Connect API endpoints
 * within a few minutes after the transaction completes.
 * 
 * Each Payment object includes several fields that end in `_money`. These fields
 * describe the various amounts of money that contribute to the payment total:
 * 
 * &lt;ul&gt;
 * &lt;li&gt;
 * Monetary values are &lt;b&gt;positive&lt;/b&gt; if they represent an
 * &lt;em&gt;increase&lt;/em&gt; in the amount of money the merchant receives (e.g.,
 * &lt;code&gt;tax_money&lt;/code&gt;, &lt;code&gt;tip_money&lt;/code&gt;).
 * &lt;/li&gt;
 * &lt;li&gt;
 * Monetary values are &lt;b&gt;negative&lt;/b&gt; if they represent an
 * &lt;em&gt;decrease&lt;/em&gt; in the amount of money the merchant receives (e.g.,
 * &lt;code&gt;discount_money&lt;/code&gt;, &lt;code&gt;refunded_money&lt;/code&gt;).
 * &lt;/li&gt;
 * &lt;/ul&gt;
 */
public class V1Payment {
    /**
     * All of the additive taxes associated with the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additive_tax")
    public V1PaymentTax[] additiveTax;

    public V1Payment withAdditiveTax(V1PaymentTax[] additiveTax) {
        this.additiveTax = additiveTax;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additive_tax_money")
    public V1Money additiveTaxMoney;

    public V1Payment withAdditiveTaxMoney(V1Money additiveTaxMoney) {
        this.additiveTaxMoney = additiveTaxMoney;
        return this;
    }
    
    /**
     * The time when the payment was created, in ISO 8601 format. Reflects the time of the first payment if the object represents an incomplete partial payment, and the time of the last or complete payment otherwise.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;

    public V1Payment withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * The unique identifier of the Square account that took the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator_id")
    public String creatorId;

    public V1Payment withCreatorId(String creatorId) {
        this.creatorId = creatorId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public Device device;

    public V1Payment withDevice(Device device) {
        this.device = device;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount_money")
    public V1Money discountMoney;

    public V1Payment withDiscountMoney(V1Money discountMoney) {
        this.discountMoney = discountMoney;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gross_sales_money")
    public V1Money grossSalesMoney;

    public V1Payment withGrossSalesMoney(V1Money grossSalesMoney) {
        this.grossSalesMoney = grossSalesMoney;
        return this;
    }
    
    /**
     * The payment's unique identifier.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public V1Payment withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * All of the inclusive taxes associated with the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusive_tax")
    public V1PaymentTax[] inclusiveTax;

    public V1Payment withInclusiveTax(V1PaymentTax[] inclusiveTax) {
        this.inclusiveTax = inclusiveTax;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusive_tax_money")
    public V1Money inclusiveTaxMoney;

    public V1Payment withInclusiveTaxMoney(V1Money inclusiveTaxMoney) {
        this.inclusiveTaxMoney = inclusiveTaxMoney;
        return this;
    }
    
    /**
     * Indicates whether or not the payment is only partially paid for.
     * If true, this payment will have the tenders collected so far, but the
     * itemizations will be empty until the payment is completed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_partial")
    public Boolean isPartial;

    public V1Payment withIsPartial(Boolean isPartial) {
        this.isPartial = isPartial;
        return this;
    }
    
    /**
     * The items purchased in the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemizations")
    public V1PaymentItemization[] itemizations;

    public V1Payment withItemizations(V1PaymentItemization[] itemizations) {
        this.itemizations = itemizations;
        return this;
    }
    
    /**
     * The unique identifier of the merchant that took the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant_id")
    public String merchantId;

    public V1Payment withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_sales_money")
    public V1Money netSalesMoney;

    public V1Payment withNetSalesMoney(V1Money netSalesMoney) {
        this.netSalesMoney = netSalesMoney;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_total_money")
    public V1Money netTotalMoney;

    public V1Payment withNetTotalMoney(V1Money netTotalMoney) {
        this.netTotalMoney = netTotalMoney;
        return this;
    }
    
    /**
     * The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_url")
    public String paymentUrl;

    public V1Payment withPaymentUrl(String paymentUrl) {
        this.paymentUrl = paymentUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_fee_money")
    public V1Money processingFeeMoney;

    public V1Payment withProcessingFeeMoney(V1Money processingFeeMoney) {
        this.processingFeeMoney = processingFeeMoney;
        return this;
    }
    
    /**
     * The URL of the receipt for the payment. Note that for split tender
     * payments, this URL corresponds to the receipt for the first tender
     * listed in the payment's tender field. Each Tender object has its own
     * receipt_url field you can use to get the other receipts associated with
     * a split tender payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt_url")
    public String receiptUrl;

    public V1Payment withReceiptUrl(String receiptUrl) {
        this.receiptUrl = receiptUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded_money")
    public V1Money refundedMoney;

    public V1Payment withRefundedMoney(V1Money refundedMoney) {
        this.refundedMoney = refundedMoney;
        return this;
    }
    
    /**
     * All of the refunds applied to the payment. Note that the value of all refunds on a payment can exceed the value of all tenders if a merchant chooses to refund money to a tender after previously accepting returned goods as part of an exchange.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunds")
    public V1Refund[] refunds;

    public V1Payment withRefunds(V1Refund[] refunds) {
        this.refunds = refunds;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surcharge_money")
    public V1Money surchargeMoney;

    public V1Payment withSurchargeMoney(V1Money surchargeMoney) {
        this.surchargeMoney = surchargeMoney;
        return this;
    }
    
    /**
     * A list of all surcharges associated with the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surcharges")
    public V1PaymentSurcharge[] surcharges;

    public V1Payment withSurcharges(V1PaymentSurcharge[] surcharges) {
        this.surcharges = surcharges;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("swedish_rounding_money")
    public V1Money swedishRoundingMoney;

    public V1Payment withSwedishRoundingMoney(V1Money swedishRoundingMoney) {
        this.swedishRoundingMoney = swedishRoundingMoney;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_money")
    public V1Money taxMoney;

    public V1Payment withTaxMoney(V1Money taxMoney) {
        this.taxMoney = taxMoney;
        return this;
    }
    
    /**
     * All of the tenders associated with the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tender")
    public V1Tender[] tender;

    public V1Payment withTender(V1Tender[] tender) {
        this.tender = tender;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tip_money")
    public V1Money tipMoney;

    public V1Payment withTipMoney(V1Money tipMoney) {
        this.tipMoney = tipMoney;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_collected_money")
    public V1Money totalCollectedMoney;

    public V1Payment withTotalCollectedMoney(V1Money totalCollectedMoney) {
        this.totalCollectedMoney = totalCollectedMoney;
        return this;
    }
    
    public V1Payment(){}
}
