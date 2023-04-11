import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPlatformsPartialUpdateRequest extends SpeakeasyBase {
    writablePlatformInput: shared.WritablePlatformInput;
    /**
     * A unique integer value identifying this platform.
     */
    id: number;
}
export declare class DcimPlatformsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    platform?: shared.Platform;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
