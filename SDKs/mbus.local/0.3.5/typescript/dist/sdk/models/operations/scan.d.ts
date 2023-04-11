import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScanRequest extends SpeakeasyBase {
    /**
     * Baudrate to communicate with M-Bus devices
     */
    baudrate: shared.BaudrateEnum;
    /**
     * The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning
     */
    device: string;
}
export declare class ScanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    slaves?: string;
    /**
     * Bad request
     */
    textError?: string;
}
