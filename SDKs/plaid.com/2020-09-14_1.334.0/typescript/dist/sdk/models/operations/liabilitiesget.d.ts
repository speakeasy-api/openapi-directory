import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LiabilitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    liabilitiesGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
