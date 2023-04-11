import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPlatformsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this platform.
     */
    id: number;
}
export declare class DcimPlatformsReadResponse extends SpeakeasyBase {
    contentType: string;
    platform?: shared.Platform;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
