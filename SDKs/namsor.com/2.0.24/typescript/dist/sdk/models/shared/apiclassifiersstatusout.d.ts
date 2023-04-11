import { SpeakeasyBase } from "../../../internal/utils";
import { APIClassifierOut } from "./apiclassifierout";
import { SoftwareVersionOut } from "./softwareversionout";
/**
 * Available classifiers and status
 */
export declare class APIClassifiersStatusOut extends SpeakeasyBase {
    /**
     * The list of classifiers and versions.
     */
    classifiers?: APIClassifierOut[];
    /**
     * The software version.
     */
    softwareVersion?: SoftwareVersionOut;
}
