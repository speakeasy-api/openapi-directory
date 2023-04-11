import { SpeakeasyBase } from "../../../internal/utils";
import { NATimeTableItem } from "./natimetableitem";
import { NAZone } from "./nazone";
export declare class NAThermProgram extends SpeakeasyBase {
    name?: string;
    programId?: string;
    selected?: boolean;
    timetable?: NATimeTableItem[];
    zones?: NAZone[];
}
