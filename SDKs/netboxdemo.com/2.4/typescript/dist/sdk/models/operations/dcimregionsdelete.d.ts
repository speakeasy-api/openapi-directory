import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimRegionsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this region.
     */
    id: number;
}
export declare class DcimRegionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
