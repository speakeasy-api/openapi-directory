import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SwitchscheduleSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class SwitchscheduleRequest extends SpeakeasyBase {
    /**
     * The relay id
     */
    deviceId: string;
    /**
     * The thermostat id
     */
    moduleId: string;
    /**
     * The schedule id. It can be found in the getthermstate response, under the keys `therm_program_backup` and `therm_program`.
     *
     * @remarks
     *
     */
    scheduleId: string;
}
export declare class SwitchscheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naOkResponse?: shared.NAOkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
