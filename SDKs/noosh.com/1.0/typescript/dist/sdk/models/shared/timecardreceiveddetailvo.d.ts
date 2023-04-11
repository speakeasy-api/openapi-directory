import { SpeakeasyBase } from "../../../internal/utils";
import { PersonVO } from "./personvo";
import { TimeCardLineVO } from "./timecardlinevo";
/**
 * Java type: com.noosh.nooshapi.vo.TimeCardReceivedDetailVO
 */
export declare class TimeCardReceivedDetailVO extends SpeakeasyBase {
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
    /**
     * Java type: com.noosh.nooshapi.vo.PersonVO
     */
    owner?: PersonVO;
    submitDate?: Date;
    timeCardLine?: TimeCardLineVO[];
    timecardId?: number;
    /**
     * Java type: java.math.BigDecimal
     */
    totalHours?: any;
    weekBeginning?: Date;
}
