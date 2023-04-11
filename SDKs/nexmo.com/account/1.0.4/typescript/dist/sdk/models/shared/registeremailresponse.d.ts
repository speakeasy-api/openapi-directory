import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Enum identifer of provider type.
 */
export declare enum RegisterEmailResponseProviderEnum {
    Email = "email"
}
/**
 * OK
 */
export declare class RegisterEmailResponse extends SpeakeasyBase {
    /**
     * An array of ApplicationID strings attached to the value provided.
     */
    applicationIds?: string[];
    /**
     * An optional name to be attached to this binding
     */
    name?: string;
    /**
     * Enum identifer of provider type.
     */
    provider?: RegisterEmailResponseProviderEnum;
    /**
     * Value given to the provider to attach to the Application IDs.
     */
    value?: string;
}
