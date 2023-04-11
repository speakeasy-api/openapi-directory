import { SpeakeasyBase } from "../../../internal/utils";
import { WorkgroupBaseVO } from "./workgroupbasevo";
/**
 * Java type: com.noosh.nooshapi.vo.WorkgroupSimpleVO
 */
export declare class WorkgroupSimpleVO extends SpeakeasyBase {
    isDefault?: boolean;
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    parentWorkgroup?: WorkgroupBaseVO;
    workgroupId?: number;
    workgroupName?: string;
}
