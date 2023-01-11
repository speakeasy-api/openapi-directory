import { SpeakeasyBase } from "../../../internal/utils";
import { ProgressSub } from "./progresssub";
import { ProgressLink } from "./progresslink";
import { ProjectStatusEnum } from "./projectstatusenum";
export declare class Progress extends SpeakeasyBase {
    languages?: Record<string, ProgressSub>;
    links?: ProgressLink;
    projectStatus?: ProjectStatusEnum;
    proofreading?: number;
    total?: number;
    translation?: number;
}
