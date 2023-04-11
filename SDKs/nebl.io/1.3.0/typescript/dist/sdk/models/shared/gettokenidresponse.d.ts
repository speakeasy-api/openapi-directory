import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.
 */
export declare class GetTokenIdResponse extends SpeakeasyBase {
    /**
     * Unique ID of the token
     */
    tokenId?: string;
    /**
     * String representing the token Symbol
     */
    tokenName?: string;
}
