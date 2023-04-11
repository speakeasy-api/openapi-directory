import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusVO } from "./taskstatusvo";
/**
 * Java type: com.noosh.nooshapi.vo.TaskStatusListVO
 */
export declare class TaskStatusListVO extends SpeakeasyBase {
    results?: TaskStatusVO[];
    statusCode?: number;
    statusReason?: string;
}
