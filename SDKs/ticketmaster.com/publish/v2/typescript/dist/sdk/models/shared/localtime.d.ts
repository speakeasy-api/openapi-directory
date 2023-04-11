import { SpeakeasyBase } from "../../../internal/utils";
import { Chronology } from "./chronology";
import { DateTimeField } from "./datetimefield";
import { DateTimeFieldType } from "./datetimefieldtype";
export declare class LocalTime extends SpeakeasyBase {
    chronology?: Chronology;
    fieldTypes?: DateTimeFieldType[];
    fields?: DateTimeField[];
    hourOfDay?: number;
    millisOfDay?: number;
    millisOfSecond?: number;
    minuteOfHour?: number;
    secondOfMinute?: number;
    values?: number[];
}
