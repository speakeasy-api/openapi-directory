import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
 */
export declare class CorsSettings extends SpeakeasyBase {
    /**
     * Configuration to allow HTTP OPTIONS calls to skip authorization. If undefined, IAP will not apply any special logic to OPTIONS requests.
     */
    allowHttpOptions?: boolean;
}
