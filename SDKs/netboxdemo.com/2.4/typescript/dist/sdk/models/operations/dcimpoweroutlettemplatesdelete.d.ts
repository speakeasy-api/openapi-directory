import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power outlet template.
     */
    id: number;
}
export declare class DcimPowerOutletTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
