import { SpeakeasyBase } from "../../../internal/utils";
import { DateTimeFieldType } from "./datetimefieldtype";
import { DurationField } from "./durationfield";
export declare class DateTimeField extends SpeakeasyBase {
    durationField?: DurationField;
    leapDurationField?: DurationField;
    lenient?: boolean;
    maximumValue?: number;
    minimumValue?: number;
    name?: string;
    rangeDurationField?: DurationField;
    supported?: boolean;
    type?: DateTimeFieldType;
}
