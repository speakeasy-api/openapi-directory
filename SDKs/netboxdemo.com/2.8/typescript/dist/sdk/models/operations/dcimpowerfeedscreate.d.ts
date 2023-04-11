import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerFeedsCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerFeed?: shared.PowerFeed;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
