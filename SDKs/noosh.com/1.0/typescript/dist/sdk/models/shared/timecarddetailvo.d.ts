import { SpeakeasyBase } from "../../../internal/utils";
import { TimeCardLineVO } from "./timecardlinevo";
/**
 * Java type: com.noosh.nooshapi.vo.TimeCardDetailVO
 */
export declare class TimeCardDetailVO extends SpeakeasyBase {
    /**
     * Java type: java.math.BigDecimal
     */
    billableHours?: any;
    isSubmit?: boolean;
    lastUpdatedDate?: Date;
    noOfWorkdays?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    nonbillableHours?: any;
    submitDate?: Date;
    timeCardLine?: TimeCardLineVO[];
    timecardId?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    totalHours?: any;
    weekBeginning?: Date;
}
