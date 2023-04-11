import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPlatformsUpdateRequest extends SpeakeasyBase {
    writablePlatformInput: shared.WritablePlatformInput;
    /**
     * A unique integer value identifying this platform.
     */
    id: number;
}
export declare class DcimPlatformsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    platform?: shared.Platform;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
