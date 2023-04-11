import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The JWT `accessToken` to use for accessing secured resourced as well as the `registrierkassenUuid` of the corresponding "Registrierkasse".
 */
export declare class AuthResult extends SpeakeasyBase {
    accessToken?: string;
    registrierkasseUuid?: string;
}
