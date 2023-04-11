import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDpsMessageReportOutputRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employer unique key. E.g. ER001
     */
    employerKey: string;
    /**
     * The lower filter date. E.g 2016-04-06
     */
    fromDate: Date;
    /**
     * The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
     */
    maxIndex?: string;
    /**
     * The DPS message status as a CSV list. E.g. Retrieved,Processed,Blocked,Ignored
     */
    messageStatuses?: string;
    /**
     * The DPS message types as a CSV list. E.g. P6,P9,SL1,SL2
     */
    messageTypes?: string;
    /**
     * The element index to begin the report. Used to control paging within large data sets. E.g. 1
     */
    startIndex?: string;
    /**
     * The upper filter date. E.g 2017-04-05
     */
    toDate?: Date;
}
export declare class GetDpsMessageReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the DPS message report execution
     */
    getDpsMessageReportOutput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
