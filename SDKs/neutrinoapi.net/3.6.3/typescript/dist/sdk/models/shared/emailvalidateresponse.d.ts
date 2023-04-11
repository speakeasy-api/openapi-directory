import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailValidateResponse extends SpeakeasyBase {
    /**
     * The email domain
     */
    domain: string;
    /**
     * True if this address has a domain error (e.g. no valid mail server records)
     */
    domainError: boolean;
    /**
     * The email address. If you have used the fix-typos option then this will be the fixed address
     */
    email: string;
    /**
     * True if this address is a disposable, temporary or darknet related email address
     */
    isDisposable: boolean;
    /**
     * True if this address is a free-mail address
     */
    isFreemail: boolean;
    /**
     * True if this address belongs to a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
     */
    isPersonal: boolean;
    /**
     * The email service provider domain
     */
    provider: string;
    /**
     * True if this address has a syntax error
     */
    syntaxError: boolean;
    /**
     * True if typos have been fixed
     */
    typosFixed: boolean;
    /**
     * Is this a valid email
     */
    valid: boolean;
}
