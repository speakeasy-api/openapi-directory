import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card.
 */
export declare enum ProjectPaymentPaymentMethodEnum {
    Corporate = "corporate",
    Client = "client",
    App = "app",
    Credit = "credit",
    CorporateCard = "corporate_card"
}
export declare class ProjectPayment extends SpeakeasyBase {
    /**
     * Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided.
     */
    bin?: string;
    /**
     * Optional with corporate accounts. Not available for others.
     */
    budgetCode?: string;
    /**
     * Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.
     */
    cardId?: number;
    /**
     * Optional. `corporate` payment method requires this.s
     */
    paymentCode?: string;
    /**
     * Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card.
     */
    paymentMethod?: ProjectPaymentPaymentMethodEnum;
    /**
     * This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card.
     */
    stripeToken?: string;
}
