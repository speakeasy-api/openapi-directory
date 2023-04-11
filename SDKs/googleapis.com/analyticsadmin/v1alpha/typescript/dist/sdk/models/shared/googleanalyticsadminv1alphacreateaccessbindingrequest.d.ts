import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBindingInput } from "./googleanalyticsadminv1alphaaccessbinding";
/**
 * Request message for CreateAccessBinding RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput extends SpeakeasyBase {
    /**
     * A binding of a user to a set of roles.
     */
    accessBinding?: GoogleAnalyticsAdminV1alphaAccessBindingInput;
    /**
     * Required. Formats: - accounts/{account} - properties/{property}
     */
    parent?: string;
}
