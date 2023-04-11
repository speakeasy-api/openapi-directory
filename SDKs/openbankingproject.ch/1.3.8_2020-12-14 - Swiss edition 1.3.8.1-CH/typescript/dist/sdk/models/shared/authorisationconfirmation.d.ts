import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Content of the body of an authorisation confirmation request
 *
 * @remarks
 *
 */
export declare class AuthorisationConfirmation extends SpeakeasyBase {
    /**
     * Confirmation Code as retrieved by the TPP from the redirect based SCA process.
     */
    confirmationCode: string;
}
