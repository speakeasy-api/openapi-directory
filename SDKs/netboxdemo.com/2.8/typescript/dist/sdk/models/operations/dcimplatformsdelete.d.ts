import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimPlatformsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this platform.
     */
    id: number;
}
export declare class DcimPlatformsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
