import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of information detected by the API.
 */
export declare class GooglePrivacyDlpV2InfoType extends SpeakeasyBase {
    /**
     * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`.
     */
    name?: string;
    /**
     * Optional version name for this InfoType.
     */
    version?: string;
}
