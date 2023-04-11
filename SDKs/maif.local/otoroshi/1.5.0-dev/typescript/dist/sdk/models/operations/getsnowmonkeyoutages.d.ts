import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSnowMonkeyOutagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    outages?: shared.Outage[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
