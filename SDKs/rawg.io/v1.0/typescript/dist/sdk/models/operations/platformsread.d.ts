import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlatformsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Platform.
     */
    id: number;
}
export declare class PlatformsReadResponse extends SpeakeasyBase {
    contentType: string;
    platformSingle?: shared.PlatformSingle;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
