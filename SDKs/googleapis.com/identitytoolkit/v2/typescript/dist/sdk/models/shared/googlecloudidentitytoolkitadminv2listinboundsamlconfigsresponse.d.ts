import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig } from "./googlecloudidentitytoolkitadminv2inboundsamlconfig";
/**
 * Response for ListInboundSamlConfigs
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse extends SpeakeasyBase {
    /**
     * The set of configs.
     */
    inboundSamlConfigs?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
