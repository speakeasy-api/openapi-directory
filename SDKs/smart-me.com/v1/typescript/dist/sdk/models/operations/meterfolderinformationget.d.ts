import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MeterFolderInformationGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class MeterFolderInformationGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    meterFolderInformation?: shared.MeterFolderInformation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
