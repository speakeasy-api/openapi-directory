import { SpeakeasyBase } from "../../../internal/utils";
import { ImageRegionCreateEntry } from "./imageregioncreateentry";
import { ImageRegionCreateResult } from "./imageregioncreateresult";
/**
 * OK
 */
export declare class ImageRegionCreateSummary extends SpeakeasyBase {
    created?: ImageRegionCreateResult[];
    duplicated?: ImageRegionCreateEntry[];
    exceeded?: ImageRegionCreateEntry[];
}
