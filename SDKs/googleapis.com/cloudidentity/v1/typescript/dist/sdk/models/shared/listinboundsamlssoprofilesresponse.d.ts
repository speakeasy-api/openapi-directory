import { SpeakeasyBase } from "../../../internal/utils";
import { InboundSamlSsoProfile } from "./inboundsamlssoprofile";
/**
 * Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
 */
export declare class ListInboundSamlSsoProfilesResponse extends SpeakeasyBase {
    /**
     * List of InboundSamlSsoProfiles.
     */
    inboundSamlSsoProfiles?: InboundSamlSsoProfile[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
