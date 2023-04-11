import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimRacksDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack.
     */
    id: number;
}
export declare class DcimRacksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
