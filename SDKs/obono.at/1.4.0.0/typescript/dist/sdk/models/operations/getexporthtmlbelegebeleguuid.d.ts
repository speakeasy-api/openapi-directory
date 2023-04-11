import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetExportHtmlBelegeBelegUuidRequest extends SpeakeasyBase {
    /**
     * The `_uuid` of a particular `Beleg` to export.
     */
    belegUuid: string;
}
export declare class GetExportHtmlBelegeBelegUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
