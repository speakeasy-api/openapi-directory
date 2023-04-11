import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QRCodeRequestBody extends SpeakeasyBase {
    /**
     * The QR code background color
     */
    bgColor?: string;
    /**
     * The content to encode into the QR code (e.g. a URL or a phone number)
     */
    content: string;
    /**
     * The QR code foreground color
     */
    fgColor?: string;
    /**
     * The height of the QR code (in px)
     */
    height?: number;
    /**
     * The width of the QR code (in px)
     */
    width?: number;
}
export declare class QRCodeResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    qrCode200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
