import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatenewscheduleSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class CreatenewscheduleRequest extends SpeakeasyBase {
    /**
     * The thermostat program (zones and timetable)
     */
    requestBody: Uint8Array;
    /**
     * The relay id
     */
    deviceId: string;
    /**
     * The thermostat id
     */
    moduleId: string;
}
export declare class CreatenewscheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naNewScheduleResponse?: shared.NANewScheduleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
