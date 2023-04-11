import { SpeakeasyBase } from "../../../internal/utils";
import { Entitlement } from "./entitlement";
/**
 * A singleton containing all of a reader's entitlements for a publication.
 */
export declare class ReaderEntitlementsInput extends SpeakeasyBase {
    /**
     * All of the entitlements for a publication reader.
     */
    entitlements?: Entitlement[];
}
/**
 * A singleton containing all of a reader's entitlements for a publication.
 */
export declare class ReaderEntitlements extends SpeakeasyBase {
    /**
     * All of the entitlements for a publication reader.
     */
    entitlements?: Entitlement[];
    /**
     * Output only. The resource name of the singleton.
     */
    name?: string;
}
