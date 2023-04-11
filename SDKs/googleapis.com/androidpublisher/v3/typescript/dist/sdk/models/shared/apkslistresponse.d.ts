import { SpeakeasyBase } from "../../../internal/utils";
import { Apk } from "./apk";
/**
 * Response listing all APKs.
 */
export declare class ApksListResponse extends SpeakeasyBase {
    /**
     * All APKs.
     */
    apks?: Apk[];
    /**
     * The kind of this response ("androidpublisher#apksListResponse").
     */
    kind?: string;
}
