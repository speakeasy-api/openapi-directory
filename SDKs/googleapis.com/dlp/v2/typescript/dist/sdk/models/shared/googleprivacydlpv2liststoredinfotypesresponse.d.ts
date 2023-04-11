import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoType } from "./googleprivacydlpv2storedinfotype";
/**
 * Response message for ListStoredInfoTypes.
 */
export declare class GooglePrivacyDlpV2ListStoredInfoTypesResponse extends SpeakeasyBase {
    /**
     * If the next page is available then the next page token to be used in following ListStoredInfoTypes request.
     */
    nextPageToken?: string;
    /**
     * List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest.
     */
    storedInfoTypes?: GooglePrivacyDlpV2StoredInfoType[];
}
