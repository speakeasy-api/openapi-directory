import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Request message for Verifications.GenerateVerificationToken.
 */
export declare class GenerateVerificationTokenRequest extends SpeakeasyBase {
    /**
     * A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
     */
    location?: Location;
}
