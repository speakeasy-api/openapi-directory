import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimPowerFeedsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power feed.
     */
    id: number;
}
export declare class DcimPowerFeedsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
