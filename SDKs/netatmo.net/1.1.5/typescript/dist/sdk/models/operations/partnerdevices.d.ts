import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PartnerdevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naPartnerDevicesResponse?: shared.NAPartnerDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
