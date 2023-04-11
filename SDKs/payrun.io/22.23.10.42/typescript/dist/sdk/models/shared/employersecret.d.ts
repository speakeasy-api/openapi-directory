import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmployerSecretEmployerSecret extends SpeakeasyBase {
    /**
     * The employer secrets' created
     */
    created?: Date;
    /**
     * The employer secrets' name
     */
    name?: string;
    /**
     * The employer secrets' value
     */
    value?: string;
}
/**
 * The employer secret object.
 */
export declare class EmployerSecret extends SpeakeasyBase {
    employerSecret?: EmployerSecretEmployerSecret;
}
