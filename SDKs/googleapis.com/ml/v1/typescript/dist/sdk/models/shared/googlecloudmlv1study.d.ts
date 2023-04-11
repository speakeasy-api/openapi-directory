import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1StudyConfig } from "./googlecloudmlv1studyconfig";
/**
 * Output only. The detailed state of a study.
 */
export declare enum GoogleCloudMlV1StudyStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Completed = "COMPLETED"
}
/**
 * A message representing a Study.
 */
export declare class GoogleCloudMlV1Study extends SpeakeasyBase {
    /**
     * Output only. Time at which the study was created.
     */
    createTime?: string;
    /**
     * Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED.
     */
    inactiveReason?: string;
    /**
     * Output only. The name of a study.
     */
    name?: string;
    /**
     * Output only. The detailed state of a study.
     */
    state?: GoogleCloudMlV1StudyStateEnum;
    /**
     * Represents configuration of a study.
     */
    studyConfig?: GoogleCloudMlV1StudyConfig;
}
/**
 * A message representing a Study.
 */
export declare class GoogleCloudMlV1StudyInput extends SpeakeasyBase {
    /**
     * Represents configuration of a study.
     */
    studyConfig?: GoogleCloudMlV1StudyConfig;
}
