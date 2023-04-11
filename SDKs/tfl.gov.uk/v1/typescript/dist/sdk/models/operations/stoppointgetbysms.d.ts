import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StopPointGetBySmsRequest extends SpeakeasyBase {
    /**
     * A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334.
     */
    id: string;
    /**
     * If set to "web", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored.
     */
    output?: string;
}
export declare class StopPointGetBySmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemObject?: Record<string, any>;
}
