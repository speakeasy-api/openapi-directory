import { SpeakeasyBase } from "../../../internal/utils";
import { ProgressLink } from "./progresslink";
import { ProgressSub } from "./progresssub";
import { ProjectStatusEnum } from "./projectstatusenum";
/**
 * Progress information
 */
export declare class Progress extends SpeakeasyBase {
    languages?: Record<string, ProgressSub>;
    links?: ProgressLink;
    projectStatus?: ProjectStatusEnum;
    proofreading?: number;
    total?: number;
    translation?: number;
    wordCount?: number;
}
