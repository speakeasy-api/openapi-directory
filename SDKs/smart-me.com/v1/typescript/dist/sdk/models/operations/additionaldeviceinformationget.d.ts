import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdditionalDeviceInformationGetRequest extends SpeakeasyBase {
    /**
     * The ID of the device
     */
    id: string;
}
export declare class AdditionalDeviceInformationGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    additionalDeviceInformation?: shared.AdditionalDeviceInformation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
