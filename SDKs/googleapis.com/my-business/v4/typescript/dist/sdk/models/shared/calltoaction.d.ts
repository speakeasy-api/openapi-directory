import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of action that will be performed.
 */
export declare enum CallToActionActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Book = "BOOK",
    Order = "ORDER",
    Shop = "SHOP",
    LearnMore = "LEARN_MORE",
    SignUp = "SIGN_UP",
    GetOffer = "GET_OFFER",
    Call = "CALL"
}
/**
 * An action that is performed when the user clicks through the post
 */
export declare class CallToAction extends SpeakeasyBase {
    /**
     * The type of action that will be performed.
     */
    actionType?: CallToActionActionTypeEnum;
    /**
     * The URL the user will be directed to upon clicking. This field should be left unset for Call CTA.
     */
    url?: string;
}
