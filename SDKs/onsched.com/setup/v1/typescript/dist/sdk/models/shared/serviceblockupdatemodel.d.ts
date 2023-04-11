import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatUpdateModel } from "./repeatupdatemodel";
/**
 * Service Block update model
 */
export declare class ServiceBlockUpdateModel extends SpeakeasyBase {
    endDate?: Date;
    endTime?: number;
    reason?: string;
    repeat?: RepeatUpdateModel;
    repeats?: boolean;
    startDate?: Date;
    startTime?: number;
}
