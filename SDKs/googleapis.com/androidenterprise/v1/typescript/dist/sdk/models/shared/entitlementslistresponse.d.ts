import { SpeakeasyBase } from "../../../internal/utils";
import { Entitlement } from "./entitlement";
/**
 * Successful response
 */
export declare class EntitlementsListResponse extends SpeakeasyBase {
    /**
     * An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to.
     */
    entitlement?: Entitlement[];
}
