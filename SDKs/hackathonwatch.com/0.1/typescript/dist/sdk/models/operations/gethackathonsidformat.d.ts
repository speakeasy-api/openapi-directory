import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETHackathonsIdFormatRequest extends SpeakeasyBase {
    /**
     * ID of the hackathon for detail information
     */
    id: number;
}
export declare class GETHackathonsIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
