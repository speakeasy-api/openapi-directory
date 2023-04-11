import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETHackathonsComingFormatRequest extends SpeakeasyBase {
    /**
     * Specify the page of coming hackathons.
     */
    page?: number;
}
export declare class GETHackathonsComingFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
