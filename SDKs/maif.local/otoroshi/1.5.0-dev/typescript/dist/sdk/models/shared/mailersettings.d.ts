import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for mailgun api client
 */
export declare class MailerSettings extends SpeakeasyBase {
    /**
     * Mailgun mailer api key
     */
    apiKey: string;
    /**
     * Mailjet mailer private api key
     */
    apiKeyPrivate?: string;
    /**
     * Mailjet mailer public api key
     */
    apiKeyPublic?: string;
    /**
     * Mailgun mailer domain
     */
    domain: string;
    /**
     * Mailgun mailer, use EU tenant api
     */
    eu?: boolean;
    /**
     * Generic mailer headers
     */
    header?: Record<string, string>;
    /**
     * Type of the mailer: console, generic, mailgun, mailjet
     */
    type?: string;
    /**
     * Generic mailer url
     */
    url?: string;
}
