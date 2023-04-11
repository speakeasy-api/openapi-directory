import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyLink } from "./thirdpartylink";
/**
 * Successful response
 */
export declare class ThirdPartyLinkListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    items?: ThirdPartyLink[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLinkListResponse".
     */
    kind?: string;
}
