import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of diff.
 */
export declare enum GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum {
    DiffTypeUnspecified = "DIFF_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    Page = "PAGE",
    Parameters = "PARAMETERS",
    Utterance = "UTTERANCE"
}
/**
 * The description of differences between original and replayed agent output.
 */
export declare class GoogleCloudDialogflowCxV3beta1TestRunDifference extends SpeakeasyBase {
    /**
     * A description of the diff, showing the actual output vs expected output.
     */
    description?: string;
    /**
     * The type of diff.
     */
    type?: GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum;
}
