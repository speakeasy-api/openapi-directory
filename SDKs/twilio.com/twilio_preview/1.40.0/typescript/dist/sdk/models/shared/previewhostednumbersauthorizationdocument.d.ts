import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationDocumentEnumStatusEnum } from "./authorizationdocumentenumstatusenum";
/**
 * Created
 */
export declare class PreviewHostedNumbersAuthorizationDocument extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument.
     */
    addressSid?: string;
    /**
     * Email recipients who will be informed when an Authorization Document has been sent and signed.
     */
    ccEmails?: string[];
    /**
     * The date this resource was created, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was updated, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * Email that this AuthorizationDocument will be sent to for signing.
     */
    email?: string;
    links?: Record<string, any>;
    /**
     * A 34 character string that uniquely identifies this AuthorizationDocument.
     */
    sid?: string;
    status?: AuthorizationDocumentEnumStatusEnum;
    url?: string;
}
