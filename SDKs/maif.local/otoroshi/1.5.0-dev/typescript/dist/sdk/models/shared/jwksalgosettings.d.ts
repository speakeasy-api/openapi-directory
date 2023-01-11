import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for a JWK set
**/
export declare class JwksAlgoSettings extends SpeakeasyBase {
    headers?: Record<string, string>;
    kty?: string;
    timeout?: number;
    ttl?: number;
    type: string;
    url?: string;
}
