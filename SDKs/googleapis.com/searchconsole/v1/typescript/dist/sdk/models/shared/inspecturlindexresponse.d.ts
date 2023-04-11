import { SpeakeasyBase } from "../../../internal/utils";
import { UrlInspectionResult } from "./urlinspectionresult";
/**
 * Index-Status inspection response.
 */
export declare class InspectUrlIndexResponse extends SpeakeasyBase {
    /**
     * URL inspection result, including all inspection results.
     */
    inspectionResult?: UrlInspectionResult;
}
