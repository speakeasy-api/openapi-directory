import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyLinkSnippet } from "./thirdpartylinksnippet";
import { ThirdPartyLinkStatus } from "./thirdpartylinkstatus";
/**
 * A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
 */
export declare class ThirdPartyLink extends SpeakeasyBase {
    /**
     * Etag of this resource
     */
    etag?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink".
     */
    kind?: string;
    /**
     * The linking_token identifies a YouTube account and channel with which the third party account is linked.
     */
    linkingToken?: string;
    /**
     * Basic information about a third party account link, including its type and type-specific information.
     */
    snippet?: ThirdPartyLinkSnippet;
    /**
     * The third-party link status object contains information about the status of the link.
     */
    status?: ThirdPartyLinkStatus;
}
