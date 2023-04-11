import { SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAlertClassificationEnum } from "./codescanningalertclassificationenum";
import { CodeScanningAlertLocation } from "./codescanningalertlocation";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
export declare class CodeScanningAlertInstanceMessage extends SpeakeasyBase {
    text?: string;
}
export declare class CodeScanningAlertInstance extends SpeakeasyBase {
    /**
     * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
     */
    analysisKey?: string;
    /**
     * Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.
     */
    category?: string;
    /**
     * Classifications that have been applied to the file that triggered the alert.
     *
     * @remarks
     * For example identifying it as documentation, or a generated file.
     */
    classifications?: CodeScanningAlertClassificationEnum[];
    commitSha?: string;
    /**
     * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
     */
    environment?: string;
    htmlUrl?: string;
    /**
     * Describe a region within a file for the alert.
     */
    location?: CodeScanningAlertLocation;
    message?: CodeScanningAlertInstanceMessage;
    /**
     * The full Git reference, formatted as `refs/heads/<branch name>`,
     *
     * @remarks
     * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
     */
    ref?: string;
    /**
     * State of a code scanning alert.
     */
    state?: CodeScanningAlertStateEnum;
}
