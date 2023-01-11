import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QrCodeRequestBody extends SpeakeasyBase {
    bgColor?: string;
    content: string;
    fgColor?: string;
    height?: number;
    width?: number;
}
export declare class QrCodeRequest extends SpeakeasyBase {
    request: QrCodeRequestBody;
}
export declare class QrCodeResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    qrCode200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
}
