import { SpeakeasyBase } from "../../../internal/utils";
import { AccountEnumStatusEnum } from "./accountenumstatusenum";
import { AccountEnumTypeEnum } from "./accountenumtypeenum";
/**
 * Created
 */
export declare class ApiV2010Account extends SpeakeasyBase {
    /**
     * The authorization token for this account. This token should be kept a secret, so no sharing.
     */
    authToken?: string;
    /**
     * The date that this account was created, in GMT in RFC 2822 format
     */
    dateCreated?: string;
    /**
     * The date that this account was last updated, in GMT in RFC 2822 format.
     */
    dateUpdated?: string;
    /**
     * A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address.
     */
    friendlyName?: string;
    /**
     * The unique 34 character id that represents the parent of this account. The OwnerAccountSid of a parent account is it's own sid.
     */
    ownerAccountSid?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    status?: AccountEnumStatusEnum;
    /**
     * A Map of various subresources available for the given Account Instance
     */
    subresourceUris?: Record<string, any>;
    type?: AccountEnumTypeEnum;
    /**
     * The URI for this resource, relative to `https://api.twilio.com`
     */
    uri?: string;
}
