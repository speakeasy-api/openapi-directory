import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the Payment Method
 */
export declare enum PaymentMethodFieldsTypeEnum {
    Manual = "manual",
    Paypal = "paypal",
    Pagseguro = "pagseguro",
    Moneybookers = "moneybookers",
    WebpayCl = "webpay_cl",
    Easypay = "easypay",
    Easypaycc = "easypaycc",
    Easypayboleto = "easypayboleto",
    IdealBasic = "ideal_basic",
    Hipay = "hipay",
    Khipu = "khipu",
    MercadoPago = "mercado_pago",
    Ifthenpay = "ifthenpay",
    Eupago = "eupago",
    Stripe = "stripe",
    Payu = "payu",
    Servipag = "servipag"
}
export declare class PaymentMethodFields extends SpeakeasyBase {
    /**
     * Unique identifier of the Payment Method
     */
    id?: number;
    /**
     * Name of the Payment Method
     */
    name?: string;
    /**
     * Type of the Payment Method
     */
    type?: PaymentMethodFieldsTypeEnum;
}
