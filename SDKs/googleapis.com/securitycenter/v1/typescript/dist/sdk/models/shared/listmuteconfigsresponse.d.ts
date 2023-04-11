import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1MuteConfig } from "./googlecloudsecuritycenterv1muteconfig";
/**
 * Response message for listing mute configs.
 */
export declare class ListMuteConfigsResponse extends SpeakeasyBase {
    /**
     * The mute configs from the specified parent.
     */
    muteConfigs?: GoogleCloudSecuritycenterV1MuteConfig[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
