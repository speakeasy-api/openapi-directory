import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodCategory } from "./paymentmethodcategory";
/**
 * successful operation
 */
export declare class MerchantSession extends SpeakeasyBase {
    /**
     * Client token to be passed to the JS client while initializing the JS SDK in the next step.
     */
    clientToken: string;
    /**
     * Available payment method categories for this particular session
     */
    paymentMethodCategories?: PaymentMethodCategory[];
    /**
     * ID of the created session. Please use this ID to share with Klarna for identifying any issues during integration.
     */
    sessionId: string;
}
