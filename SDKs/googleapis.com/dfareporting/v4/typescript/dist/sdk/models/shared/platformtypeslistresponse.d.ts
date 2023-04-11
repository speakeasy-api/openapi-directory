import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformType } from "./platformtype";
/**
 * Platform Type List Response
 */
export declare class PlatformTypesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse".
     */
    kind?: string;
    /**
     * Platform type collection.
     */
    platformTypes?: PlatformType[];
}
