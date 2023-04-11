import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRegionsUpdateRequest extends SpeakeasyBase {
    writableRegionInput: shared.WritableRegionInput;
    /**
     * A unique integer value identifying this region.
     */
    id: number;
}
export declare class DcimRegionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
