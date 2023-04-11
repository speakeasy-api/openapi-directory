import { SpeakeasyBase } from "../../../internal/utils";
import { IdpCredential } from "./idpcredential";
/**
 * Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.
 */
export declare class ListIdpCredentialsResponse extends SpeakeasyBase {
    /**
     * The IdpCredentials from the specified InboundSamlSsoProfile.
     */
    idpCredentials?: IdpCredential[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
