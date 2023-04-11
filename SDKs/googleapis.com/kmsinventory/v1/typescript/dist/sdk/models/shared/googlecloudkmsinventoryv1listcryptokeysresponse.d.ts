import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudKmsV1CryptoKey } from "./googlecloudkmsv1cryptokey";
/**
 * Response message for KeyDashboardService.ListCryptoKeys.
 */
export declare class GoogleCloudKmsInventoryV1ListCryptoKeysResponse extends SpeakeasyBase {
    /**
     * The list of CryptoKeys.
     */
    cryptoKeys?: GoogleCloudKmsV1CryptoKey[];
    /**
     * The page token returned from the previous response if the next page is desired.
     */
    nextPageToken?: string;
}
