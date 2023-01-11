import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
import { ProjectStatusEnum } from "./projectstatusenum";
export declare class CallbackResult extends SpeakeasyBase {
    data?: Project;
    result?: string;
    type?: ProjectStatusEnum;
    url?: string;
}
