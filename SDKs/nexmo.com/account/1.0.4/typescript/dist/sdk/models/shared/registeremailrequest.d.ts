import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The delivery method by which the value would be assigned. Always `email`
 */
export declare enum RegisterEmailRequestProviderEnum {
    Email = "email"
}
export declare class RegisterEmailRequest extends SpeakeasyBase {
    /**
     * An optional array of additional ApplicationID's that the value is to be assigned to.
     */
    applicationIds?: Record<string, any>;
    /**
     * An optional name to be attached to this binding
     */
    name?: string;
    /**
     * The delivery method by which the value would be assigned. Always `email`
     */
    provider: RegisterEmailRequestProviderEnum;
    /**
     * The email adress to attach to the application(s)
     */
    value: string;
}
