import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualBillingMeterActivePostRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    device?: shared.Device;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
