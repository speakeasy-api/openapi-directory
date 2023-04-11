import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { OBReadDataScheduledPayment3 } from "./obreaddatascheduledpayment3";
/**
 * Scheduled Payments Read
 */
export declare class OBReadScheduledPayment3 extends SpeakeasyBase {
    data: OBReadDataScheduledPayment3;
    /**
     * Links relevant to the payload
     */
    links?: Links;
    /**
     * Meta Data relevant to the payload
     */
    meta?: Meta;
}
