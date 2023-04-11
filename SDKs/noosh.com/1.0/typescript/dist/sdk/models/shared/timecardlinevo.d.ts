import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectTimeCardVO } from "./projecttimecardvo";
import { TaskTimeCardVO } from "./tasktimecardvo";
/**
 * Java type: com.noosh.nooshapi.vo.TimeCardLineVO
 */
export declare class TimeCardLineVO extends SpeakeasyBase {
    activityName?: string;
    /**
     * Java type: java.math.BigDecimal
     */
    day1HoursSpent?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    day2HoursSpent?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    day3HoursSpent?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    day4HoursSpent?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    day5HoursSpent?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    day6HoursSpent?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    day7HoursSpent?: any;
    /**
     * Java type: com.noosh.nooshapi.vo.ProjectTimeCardVO
     */
    project?: ProjectTimeCardVO;
    /**
     * Java type: com.noosh.nooshapi.vo.TaskTimeCardVO
     */
    task?: TaskTimeCardVO;
    timeCardLineId?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    totalHoursSpent?: any;
}
