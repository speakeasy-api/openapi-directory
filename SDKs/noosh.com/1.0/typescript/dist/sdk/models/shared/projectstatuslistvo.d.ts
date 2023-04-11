import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusSimpleVO } from "./projectstatussimplevo";
/**
 * Java type: com.noosh.nooshapi.vo.ProjectStatusListVO
 */
export declare class ProjectStatusListVO extends SpeakeasyBase {
    results?: ProjectStatusSimpleVO[];
    statusCode?: number;
    statusReason?: string;
}
