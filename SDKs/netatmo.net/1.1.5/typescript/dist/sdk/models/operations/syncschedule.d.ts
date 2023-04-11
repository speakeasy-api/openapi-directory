import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SyncscheduleSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class SyncscheduleRequest extends SpeakeasyBase {
    /**
     * The thermostat program (zones, timetable and name)
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
export declare class SyncscheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naOkResponse?: shared.NAOkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
