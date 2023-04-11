import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
/**
 * Java type: com.noosh.nooshapi.vo.TaskSimpleVO
 */
export declare class TaskSimpleVO extends SpeakeasyBase {
    actualEnd?: Date;
    /**
     * Java type: java.math.BigDecimal
     */
    actualHours?: any;
    actualStart?: Date;
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    assignTo?: PersonVO;
    /**
     * Java type: java.math.BigDecimal
     */
    baselineDuration?: any;
    baselineEndDate?: Date;
    baselineStartDate?: Date;
    /**
     * Java type: java.math.BigDecimal
     */
    currentDuration?: any;
    isMilestone?: boolean;
    modDate?: Date;
    planEnd?: Date;
    planStart?: Date;
    priority?: string;
    scheduleCode?: string;
    status?: string;
    taskId?: number;
    taskName?: string;
    taskType?: string;
}
