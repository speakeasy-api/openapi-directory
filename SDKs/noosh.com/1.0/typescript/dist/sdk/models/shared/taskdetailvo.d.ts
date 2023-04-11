import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
/**
 * Java type: com.noosh.nooshapi.vo.TaskDetailVO
 */
export declare class TaskDetailVO extends SpeakeasyBase {
    /**
     * Java type: java.math.BigDecimal
     */
    actualDuration?: any;
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
    comments?: string;
    createDate?: Date;
    creatorWorkgroupName?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    currentDuration?: any;
    description?: string;
    isMilestone?: boolean;
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    lastUpdatedBy?: PersonVO;
    modDate?: Date;
    percentComplete?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    planDuration?: any;
    planEnd?: Date;
    planStart?: Date;
    priority?: string;
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    requestedBy?: PersonVO;
    scheduleCode?: string;
    status?: string;
    taskId?: number;
    taskName?: string;
    taskType?: string;
}
