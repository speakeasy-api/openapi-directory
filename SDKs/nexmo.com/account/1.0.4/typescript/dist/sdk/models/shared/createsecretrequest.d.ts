import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSecretRequest extends SpeakeasyBase {
    /**
     * The new secret must follow these rules:
     *
     * @remarks
     *
     * * minimum 8 characters
     * * maximum 25 characters
     * * minimum 1 lower case character
     * * minimum 1 upper case character
     * * minimum 1 digit
     *
     */
    secret: string;
}
