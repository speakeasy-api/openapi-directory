import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeDescription } from "./googleprivacydlpv2infotypedescription";
/**
 * Response to the ListInfoTypes request.
 */
export declare class GooglePrivacyDlpV2ListInfoTypesResponse extends SpeakeasyBase {
    /**
     * Set of sensitive infoTypes.
     */
    infoTypes?: GooglePrivacyDlpV2InfoTypeDescription[];
}
