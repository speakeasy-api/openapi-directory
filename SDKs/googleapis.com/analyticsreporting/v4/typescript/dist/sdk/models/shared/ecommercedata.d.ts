import { SpeakeasyBase } from "../../../internal/utils";
import { ProductData } from "./productdata";
import { TransactionData } from "./transactiondata";
/**
 * Action associated with this e-commerce action.
 */
export declare enum EcommerceDataActionTypeEnum {
    Unknown = "UNKNOWN",
    Click = "CLICK",
    DetailsView = "DETAILS_VIEW",
    AddToCart = "ADD_TO_CART",
    RemoveFromCart = "REMOVE_FROM_CART",
    Checkout = "CHECKOUT",
    Payment = "PAYMENT",
    Refund = "REFUND",
    CheckoutOption = "CHECKOUT_OPTION"
}
/**
 * The type of this e-commerce activity.
 */
export declare enum EcommerceDataEcommerceTypeEnum {
    EcommerceTypeUnspecified = "ECOMMERCE_TYPE_UNSPECIFIED",
    Classic = "CLASSIC",
    Enhanced = "ENHANCED"
}
/**
 * E-commerce details associated with the user activity.
 */
export declare class EcommerceData extends SpeakeasyBase {
    /**
     * Action associated with this e-commerce action.
     */
    actionType?: EcommerceDataActionTypeEnum;
    /**
     * The type of this e-commerce activity.
     */
    ecommerceType?: EcommerceDataEcommerceTypeEnum;
    /**
     * Details of the products in this transaction.
     */
    products?: ProductData[];
    /**
     * Represents details collected when the visitor performs a transaction on the page.
     */
    transaction?: TransactionData;
}
