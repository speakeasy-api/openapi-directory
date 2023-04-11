import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerFeedsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power feed.
     */
    id: number;
}
export declare class DcimPowerFeedsReadResponse extends SpeakeasyBase {
    contentType: string;
    powerFeed?: shared.PowerFeed;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
