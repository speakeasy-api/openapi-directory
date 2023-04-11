import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutPayScheduleRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The pay schedule object.
     */
    paySchedule: shared.PaySchedule;
    /**
     * The pay schedules' unique identifier. E.g SCH001
     */
    payScheduleId: string;
}
export declare class PutPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The pay schedule object.
     */
    paySchedule?: shared.PaySchedule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
