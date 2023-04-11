import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class MessagingV1DomainCertV4 extends SpeakeasyBase {
    /**
     * Optional JSON field describing the status and upload date of a new certificate in the process of validation
     */
    certInValidation?: any;
    /**
     * The unique string that we created to identify this Certificate resource.
     */
    certificateSid?: string;
    /**
     * Date that this Domain was registered to the Twilio platform to create a new Domain object.
     */
    dateCreated?: Date;
    /**
     * Date that the private certificate associated with this domain expires. You will need to update the certificate before that date to ensure your shortened links will continue to work.
     */
    dateExpires?: Date;
    /**
     * Date that this Domain was last updated.
     */
    dateUpdated?: Date;
    /**
     * Full url path for this domain.
     */
    domainName?: string;
    /**
     * The unique string that we created to identify the Domain resource.
     */
    domainSid?: string;
    url?: string;
}
