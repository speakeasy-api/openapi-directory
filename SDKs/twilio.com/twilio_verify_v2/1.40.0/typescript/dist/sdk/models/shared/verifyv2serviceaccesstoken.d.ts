import { SpeakeasyBase } from "../../../internal/utils";
import { AccessTokenEnumFactorTypesEnum } from "./accesstokenenumfactortypesenum";
/**
 * Created
 */
export declare class VerifyV2ServiceAccessToken extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The date that this access token was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The unique external identifier for the Entity of the Service.
     */
    entityIdentity?: string;
    /**
     * A human readable description of this factor, up to 64 characters. For a push factor, this can be the device's name.
     */
    factorFriendlyName?: string;
    factorType?: AccessTokenEnumFactorTypesEnum;
    /**
     * The unique SID identifier of the Verify Service.
     */
    serviceSid?: string;
    /**
     * A 34 character string that uniquely identifies this Access Token.
     */
    sid?: string;
    /**
     * The access token generated for enrollment, this is an encrypted json web token.
     */
    token?: string;
    /**
     * How long, in seconds, the access token is valid. Max: 5 minutes
     */
    ttl?: number;
    /**
     * The URL of this resource.
     */
    url?: string;
}
