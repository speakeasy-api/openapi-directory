import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimPowerPortTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power port template.
     */
    id: number;
}
export declare class DcimPowerPortTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
