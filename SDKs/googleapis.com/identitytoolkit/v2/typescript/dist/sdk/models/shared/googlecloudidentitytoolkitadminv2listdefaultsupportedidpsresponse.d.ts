import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp } from "./googlecloudidentitytoolkitadminv2defaultsupportedidp";
/**
 * Response for ListDefaultSupportedIdps
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse extends SpeakeasyBase {
    /**
     * The set of configs.
     */
    defaultSupportedIdps?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
