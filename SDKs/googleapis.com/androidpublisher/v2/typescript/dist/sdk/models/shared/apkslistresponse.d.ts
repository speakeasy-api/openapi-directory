import { SpeakeasyBase } from "../../../internal/utils";
import { Apk } from "./apk";
/**
 * Successful response
 */
export declare class ApksListResponse extends SpeakeasyBase {
    apks?: Apk[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apksListResponse".
     */
    kind?: string;
}
