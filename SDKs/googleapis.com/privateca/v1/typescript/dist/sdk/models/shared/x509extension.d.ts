import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectId } from "./objectid";
/**
 * An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
 */
export declare class X509Extension extends SpeakeasyBase {
    /**
     * Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
     */
    critical?: boolean;
    /**
     * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
     */
    objectId?: ObjectId;
    /**
     * Required. The value of this X.509 extension.
     */
    value?: string;
}
