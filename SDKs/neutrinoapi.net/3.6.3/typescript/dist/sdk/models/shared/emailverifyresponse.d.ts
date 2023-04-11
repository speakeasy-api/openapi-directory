import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailVerifyResponse extends SpeakeasyBase {
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
     * True if this email domain has a catch-all policy (it will accept mail for any username)
     */
    isCatchAll: boolean;
    /**
     * True if the mail server responded with a temporary failure (either a 4xx response code or unresponsive server). You can retry this address later, we recommend waiting at least 15 minutes before retrying
     */
    isDeferred: boolean;
    /**
     * True if this address is a disposable, temporary or darknet related email address
     */
    isDisposable: boolean;
    /**
     * True if this address is a free-mail address
     */
    isFreemail: boolean;
    /**
     * True if this address is for a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
     */
    isPersonal: boolean;
    /**
     * The email service provider domain
     */
    provider: string;
    /**
     * The raw SMTP response message received during verification
     */
    smtpResponse: string;
    /**
     * The SMTP verification status for the address: <br> <ul> <li>ok - SMTP verification was successful, this is a real address that can receive mail</li> <li>invalid - this is not a valid email address (has either a domain or syntax error)</li> <li>absent - this address is not registered with the email service provider</li> <li>unresponsive - the mail server(s) for this address timed-out or refused to open an SMTP connection</li> <li>unknown - sorry, we could not reliably determine the real status of this address (this address may or may not exist)</li> </ul>
     */
    smtpStatus: string;
    /**
     * True if this address has a syntax error
     */
    syntaxError: boolean;
    /**
     * True if typos have been fixed
     */
    typosFixed: boolean;
    /**
     * Is this a valid email address (syntax and domain is valid)
     */
    valid: boolean;
    /**
     * True if this address has passed SMTP verification. Check the smtp-status and smtp-response fields for specific verification details
     */
    verified: boolean;
}
