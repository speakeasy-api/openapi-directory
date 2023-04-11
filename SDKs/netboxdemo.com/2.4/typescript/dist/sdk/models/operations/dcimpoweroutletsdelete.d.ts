import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power outlet.
     */
    id: number;
}
export declare class DcimPowerOutletsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
