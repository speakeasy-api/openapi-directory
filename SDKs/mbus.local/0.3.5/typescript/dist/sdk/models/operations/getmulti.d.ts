import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMultiRequest extends SpeakeasyBase {
    /**
     * The slave device to get data from
     */
    address: string;
    /**
     * Baudrate to communicate with M-Bus devices
     */
    baudrate: shared.BaudrateEnum;
    /**
     * The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning
     */
    device: string;
    /**
     * The slave device to get data from
     */
    maxframes: number;
}
export declare class GetMultiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    mbusData?: string;
    /**
     * Bad request
     */
    textError?: string;
}
