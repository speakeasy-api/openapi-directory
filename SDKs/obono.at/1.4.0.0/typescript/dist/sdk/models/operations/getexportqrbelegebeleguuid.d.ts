import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetExportQrBelegeBelegUuidRequest extends SpeakeasyBase {
    /**
     * The `_uuid` of a particular `Beleg` to export.
     */
    belegUuid: string;
}
export declare class GetExportQrBelegeBelegUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
