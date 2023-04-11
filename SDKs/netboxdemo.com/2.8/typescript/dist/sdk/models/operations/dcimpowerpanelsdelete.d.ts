import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimPowerPanelsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power panel.
     */
    id: number;
}
export declare class DcimPowerPanelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
